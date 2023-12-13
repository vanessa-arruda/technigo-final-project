import { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import recycle, {
  increasePoints,
  restart,
  submitAnswer,
  goToNextQuestion,
} from "../reducers/recycle";
import { IconContext } from "react-icons";
import { GrChapterNext } from "react-icons/gr";
import { MdOutlineRestartAlt } from "react-icons/md";
import "../styles/CurrentQuestion.css";
import qData from "../questions.json";

export const CurrentQuestion = () => {
  const [finishClicked, setFinishClicked] = useState(false);
  const question = useSelector(
    (state) => qData.questions[state.recycle.currentQuestionIndex]
  );

  const loginUser = useSelector((state) => state.recycle.loginUser);
  const dispatch = useDispatch();

  const recycle = useSelector((state) => state.recycle);

  const quizOver = useSelector((state) => state.recycle.quizOver);

  const answer = useSelector((state) =>
    state.recycle.answers.find((a) => a.questionId === question.id)
  );

  const handleAnswerClick = (answerIndex, questionId) => {
    dispatch(submitAnswer({ answerIndex, questionId }));
  };

  const correctAnswerIndex = question.correctAnswerIndex;
  const incorrectAnswerIndex =
    answer && !answer.isCorrect ? answer.answerIndex : undefined;

  const handleRestart = () => {
    dispatch(restart());
  };

  const handleNext = () => {
    dispatch(goToNextQuestion());
  };
  const handleFinish = () => {
      alert(`Your score is: ${recycle.score}`);
      dispatch(
        increasePoints({ userName: loginUser, pointsToAdd: recycle.score })
      );
      dispatch(restart());
    
  };

  // console.log(recycle.currentQuestionIndex ,recycle.questions.length);
  return (
    <main className="quiz-container">
      <h1 className="quiz-question">Question: {question.questionText}</h1>
      <div>
        {<img className="image" src={question.questionImages} alt={"image"} />}
      </div>
      <div className="answers-container">
        {/* answer options*/}
        {question.options.map((option, index) => (
          <button
            className={`answers ${
              answer && correctAnswerIndex == index ? "correct" : ""
            }  ${incorrectAnswerIndex == index ? "incorrect" : ""}`}
            key={index}
            onClick={() => handleAnswerClick(index, question.id)}
          >
            <IconContext.Provider value={{ className: "answer-icon" }}>
              <FaRegCheckCircle />
            </IconContext.Provider>

            {option}
          </button>
        ))}
      </div>
      <div className="flip-card-container">
        <img
          className="img hidden"
          src={question.optionsImages}
          alt={"image"}
        />
        <p className="explanation hidden">{question.explanation}</p>
      </div>
      {answer && (
        <div className="correct-answer">
          {answer.isCorrect ? "Correct!" : "Incorrect"}
        </div>
      )}
      <div className="score-container">
        <p>Score: {recycle.score}</p>
      </div>
      <section className="quiz-buttons-container">
        <button className="btn" onClick={handleRestart}>
          Restart <MdOutlineRestartAlt />
        </button>
        <button
          className="btn"
          onClick={
            recycle.currentQuestionIndex === qData.questions.length - 1
              ? handleFinish
              : handleNext
          }
        >
          {recycle.currentQuestionIndex === qData.questions.length - 1
            ? "Finish"
            : "Next"}{" "}
          <GrChapterNext />
        </button>
      </section>
    </main>
  );
};
