import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'foundation-sites/dist/css/foundation.min.css';
import './App.css'; 

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Вход успешен!');
    navigate('/catalog');
  };

  const handleRegisterClick = () => {
    navigate('/register'); 
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-text">Вход</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <label>
            Электронная почта:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Пароль:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button className="button large primary" type="submit">
            Войти
          </button>
        </form>
        <button className="button large secondary" onClick={handleRegisterClick}>
          Зарегистрироваться
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
