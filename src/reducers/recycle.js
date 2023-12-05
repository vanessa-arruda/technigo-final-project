import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { userName: "Guest", password: "", points: 0 },
    { userName: "behrouz", password: "1", points: 0 },
    { userName: "vanessa", password: "2", points: 0 },
  ],
  loginUser: "Guest",
};

export const userSlice = createSlice({
  name: "recycle",
  initialState,
  reducers: {
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
    },
  },
});

export const { increasePoints, decreasePoints, loginUser } = userSlice.actions;

export default userSlice.reducer;
