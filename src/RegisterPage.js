import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'foundation-sites/dist/css/foundation.min.css';
import './App.css'; 

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Регистрация успешна!');
    navigate('/catalog');
  };

  const handleLoginClick = () => {
    navigate('/login'); 
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1 className="register-text">Регистрация</h1>
        <form onSubmit={handleSubmit} className="register-form">
          <label>
            Имя пользователя:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
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
            Зарегистрироваться
          </button>
        </form>
        <button className="button large secondary" onClick={handleLoginClick}>
          Перейти ко входу
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
