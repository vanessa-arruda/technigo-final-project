
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    users: [
    {userName:"Guest",
    password :"",
    points: 0
    },

    {userName:"behrouz",
    password :"1",
    points: 0
    },

    {userName:"vanessa",
    password:"2",
    points: 0
    }
],
    loginUser: "Guest" ,

};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {

    // increasePoints: (state, action) => {
    //   state.points += action.payload;
    // },

    // decreasePoints: (state, action) => {
    //   state.points -= action.payload;
    // },

    loginUser: (state, action) => {
      const {enteredUsername, enteredPassword}= action.payload;
      console.log ({enteredUsername, enteredPassword});
      console.log (action.payload);
      const user = state.users.find(u => u.userName === enteredUsername && u.password === enteredPassword);

      if (user) {
        return {
          ...state,
          loginUser: enteredUsername,
        };
      } else {
        alert("username or password incorrect") ;
        return state;
      }

    },


    
  },
});

export const {
  increasePoints,
  decreasePoints,
  loginUser
} = userSlice.actions;

export default userSlice.reducer;
