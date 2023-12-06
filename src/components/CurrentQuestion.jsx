import { useEffect } from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import recycle, {increasePoints, restart, submitAnswer,goToNextQuestion } from '../reducers/recycle';
import { IconContext } from 'react-icons';
import { GrChapterNext } from 'react-icons/gr';
import { MdOutlineRestartAlt } from 'react-icons/md';
import "../styles/CurrentQuestion.css";


export const CurrentQuestion = () => {
  const question = useSelector(
    (state) => state.recycle.questions[state.recycle.currentQuestionIndex]
  );
  const loginUser = useSelector((state) => state.recycle.loginUser);
  const dispatch = useDispatch();
  
  const recycle = useSelector((state) => state.recycle);

  const quizOver = useSelector((state) => state.recycle.quizOver);


  const answer = useSelector(
    (state) =>
      state.recycle.answers.find((a) => a.questionId === question.id)
  );

  const handleAnswerClick = (answerIndex, questionId) => {
    dispatch(submitAnswer({ answerIndex, questionId }));
  
  };

  const withImage = 'optionsImages' in question;
  const correctAnswerIndex = question.correctAnswerIndex;
  const incorrectAnswerIndex = answer && !answer.isCorrect ? answer.answerIndex : undefined;

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

 

  const handleRestart = () => {
    dispatch(restart());
  };

  const handleNext = () => {
    dispatch(goToNextQuestion());
  };

  const handleFinish = () => {
    // Additional actions or state changes before showing the modal
    alert(`your score is: ${recycle.score} `);
    dispatch(increasePoints({ userName: loginUser, pointsToAdd: recycle.score }));
  };
  console.log(recycle.currentQuestionIndex ,recycle.questions.length);
  return (
    <main className="quiz-container">
      <h1 className="quiz-question">Question: {question.questionText}</h1>
      <div>
        {(
          <img className="image" src={question.questionImages} alt={"image"} />
        )}
      </div>
      <div className={`answers-container ${withImage ? 'with-image' : ''}`}>
        {/* answer options*/}
        {question.options.map((option, index) => (
          <button
            className={`answers ${answer && correctAnswerIndex == index ? 'correct' : ''}  ${incorrectAnswerIndex == index ? 'incorrect' : ''}`}
            key={index}
            onClick={() => handleAnswerClick(index, question.id)}
          >
            <IconContext.Provider value={{className:"answer-icon"}}>
              <FaRegCheckCircle />
            </IconContext.Provider>
            {withImage && <img className="fixed-image-size" src={question.optionsImages[index]} alt={option} />}
            {option}
          </button>
        ))}
      </div>
      <div className="flip-card-container">
        {withImage && <img className="img hidden" src={question.optionsImages[0]} alt={question.options[0]} />}
        <p className="explanation hidden">{question.explanation}</p>
      </div>
      {answer && (
        <div className="correct-answer">
          {answer.isCorrect ? 'Correct!' : 'Incorrect'}
        </div>
      )}
      <div className="score-container">
        <p>Score: {recycle.score}</p>
      </div>
      <section className="quiz-buttons-container">
      <button className="btn" onClick={handleRestart}>
        Restart <MdOutlineRestartAlt />
      </button>
      <button className="btn" onClick={recycle.currentQuestionIndex === recycle.questions.length - 1 ? handleFinish : handleNext}>
        {recycle.currentQuestionIndex === recycle.questions.length - 1 ? 'Finish' : 'Next'} <GrChapterNext />
      </button>
       </section>
    </main>
      


  );
};
