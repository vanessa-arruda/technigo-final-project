
import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import  LoginModal  from "./components/LoginModal"; 
import routes from "./routes";
import { configureStore } from "@reduxjs/toolkit";
import  recycleReducer from "./reducers/recycle"; 


const store = configureStore({
  reducer: {
    recycle: recycleReducer,

  },
});

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header onLoginClick={openLoginModal} />
        <Navbar />
        {routes}
        <Footer />
        <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
0.