import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { loginUser } from '../reducers/recycle'; 
import '../styles/loginModal.css';

Modal.setAppElement('#root');

const LoginModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredUsername, setEnteredUsername] = useState(''); 
  const handleLogin = () => {
    dispatch(loginUser({enteredUsername,enteredPassword}));
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Login Modal">
      <div className="authentication-modal">
        <label htmlFor="usernameInput">Enter Username:</label>
        <input
          type="text"
          id="usernameInput"
          placeholder="Type username..."
          value={enteredUsername}
          onChange={(e) => setEnteredUsername(e.target.value)}
        />
        <label htmlFor="passwordInput">Enter Password:</label>
        <input
          type="password"
          id="passwordInput"
          value={enteredPassword}
          onChange={(e) => setEnteredPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default LoginModal;
