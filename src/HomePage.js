import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'foundation-sites/dist/css/foundation.min.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register'); 
  };

  const handleSupportClick = () => {
    navigate('/support'); 
  };

  return (
    <div className="grid-container full">
      <div className="grid-x grid-padding-x align-center-middle text-center" style={{ minHeight: '100vh' }}>
        <div className="cell small-10 medium-8 large-6">
          <div className="callout large primary">
            <h1 className="welcome-text">Привета всем, кто сейчас это читает! Вы попали в наш интернет-магазин!</h1>
            <p className="welcome-description">Исследуйте наш крутейший ассортимент и скорее заказывайте, ведь не стоит ничего откладывать на потом;!</p>
            <div className="button-group stacked-for-small">
              <button className="button large primary" onClick={handleRegisterClick}>
                Перейти к регистрации
              </button>
              <button className="button large secondary" onClick={handleSupportClick}>
                Случились проблемки? Связаться с поддержкой
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
