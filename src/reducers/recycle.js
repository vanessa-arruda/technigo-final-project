import { createSlice } from "@reduxjs/toolkit";


const questions =
[
  {
    id: 1,
    questionText: "What is the primary goal of recycling?",
    options: [
      "Reducing waste and conserving resources",
      "Increasing landfill space",
      "Encouraging pollution",
      "Exploiting natural resources"
    ],
    correctAnswerIndex: 0,
    explanation: "Recycling aims to reduce waste and conserve resources by reusing materials in the production process."
  },
  {
    id: 2,
    questionText: "Which of the following materials is commonly recycled to reduce environmental impact?",
    options: [
      "Plastic",
      "Styrofoam",
      "Single-use batteries",
      "Mixed with non-recyclable materials"
    ],
    correctAnswerIndex: 0,
    explanation: "Plastic is commonly recycled to reduce environmental impact and promote sustainability."
  },
  {
    id: 3,
    questionText: "How does composting contribute to sustainability?",
    options: [
      "Produces harmful greenhouse gases",
      "Increases landfill waste",
      "Converts organic waste into nutrient-rich soil",
      "Requires a large amount of water"
    ],
    correctAnswerIndex: 2,
    explanation: "Composting contributes to sustainability by converting organic waste into nutrient-rich soil, supporting plant growth and reducing the need for chemical fertilizers."
  },
  {
    id: 4,
    questionText: "What is an example of a sustainable practice in daily life?",
    options: [
      "Using disposable single-use products",
      "Conserving water and energy",
      "Throwing all waste into a single bin",
      "Ignoring environmental regulations"
    ],
    correctAnswerIndex: 1,
    explanation: "Conserving water and energy is an example of a sustainable practice in daily life that helps reduce environmental impact."
  },
  {
    id: 5,
    questionText: "What is the purpose of the circular economy concept in sustainability?",
    options: [
      "Promoting a linear consumption model",
      "Encouraging planned obsolescence",
      "Reducing waste and promoting recycling",
      "Increasing dependence on finite resources"
    ],
    correctAnswerIndex: 2,
    explanation: "The circular economy concept in sustainability aims to reduce waste and promote recycling by emphasizing the continuous use and recycling of materials in a closed loop."
  }
];

const initialState = {
  users: [
    { userName: "Guest", password: "", points: 0 },
    { userName: "behrouz", password: "1", points: 0 },
    { userName: "vanessa", password: "2", points: 0 },
  ],
  loginUser: "Guest",
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,
  score: 0, // Added a score property to the state
  scoreThreshold: -10 // Set a score threshold to end the quiz
};



export const userSlice = createSlice({
  name: "recycle",
  initialState,
  reducers: {
    submitAnswer: (state, action) => {
      const { questionId, answerIndex } = action.payload;
      const question = state.questions.find((q) => q.id === questionId);
    
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
      const scoreChange = isCorrect ? 10 : -5; // Adjust points as needed
    
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
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true;
      } else {
        state.currentQuestionIndex += 1;
      }
    },
  
    restart: () => {
      return initialState;
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
      const { userName, pointsToAdd } = action.payload;
      const updatedUsers = state.users.map((user) => {
        if (user.userName === userName) {
          return { ...user, points: user.points - pointsToAdd };
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

export const { increasePoints, decreasePoints, loginUser,submitAnswer, restart,countQuestionsLeft,goToNextQuestion } = userSlice.actions;

export default userSlice.reducer;
