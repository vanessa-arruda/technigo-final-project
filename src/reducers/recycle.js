import { createSlice } from "@reduxjs/toolkit";
import qData from '../questions.json';

const initialState = {
  //Authentication
  users: [
    { userName: "Guest", password: "", points: 0 },
    { userName: "behrouz", password: "1", points: 100 },
    { userName: "vanessa", password: "2", points: 470 },
  ],
  loginUser: "Guest",
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,
  score: 0,
  scoreThreshold: -10 
};

//quiz
export const userSlice = createSlice({
  name: "recycle",
  initialState,
  reducers: {
    submitAnswer: (state, action) => {
      const { questionId, answerIndex } = action.payload;
      const question = qData.questions.find((q) => q.id === questionId);
    
      if (!question) {
        throw new Error(
          "Could not find the question! Check to make sure you are passing the question id correctly."
        );
      }
    
      if (question.options[answerIndex] === undefined) {
        throw new Error(
          `You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`
        );
      }
    
      const isCorrect = question.correctAnswerIndex === answerIndex;
      const scoreChange = isCorrect ? 10 : 0; // Adjust points as needed
    
      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect
      });
    
      state.score += scoreChange;
    
      // Check if the score is below the threshold to end the quiz
      if (state.score < state.scoreThreshold) {
        state.quizOver = true;
      }
    },
    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex + 1 === qData.questions.length) {
        state.quizOver = true;
      } else {
        state.currentQuestionIndex += 1;
      }
    },
  
    restart: (state) => {
      return {
        ...state,
        answers: initialState.answers,
        score: initialState.score,
        currentQuestionIndex: initialState.currentQuestionIndex,
        quizOver: initialState.quizOver,
      };
    },


    increasePoints: (state, action) => {
      const { userName, pointsToAdd } = action.payload;
      console.log (userName, pointsToAdd);
      const updatedUsers = state.users.map((user) => {
        if (user.userName === userName) {
          return { ...user, points: user.points + pointsToAdd };
        }
        return user;
      });
    
      return { ...state, users: updatedUsers };
    },

    

    decreasePoints: (state, action) => {
      const { userName, pointsToRemove } = action.payload;
      console.log(pointsToRemove);
      const updatedUsers = state.users.map((user) => {
        if (user.userName === userName) {
          return { ...user, points: user.points - pointsToRemove };
        }
        return user;
      });
    
      return { ...state, users: updatedUsers };
    },

    loginUser: (state, action) => {
      const { enteredUsername, enteredPassword } = action.payload;
      const user = state.users.find(
        (u) => u.userName === enteredUsername && u.password === enteredPassword
      );

      if (user) {
        return {
          ...state,
          loginUser: enteredUsername,
        };
      } else {
        alert("username or password incorrect");
        return state;
      }
    }
  },
});

export const { increasePoints, decreasePoints, loginUser,submitAnswer, restart,countQuestionsLeft,goToNextQuestion,completeTask, resetTasks} = userSlice.actions;

export default userSlice.reducer;
