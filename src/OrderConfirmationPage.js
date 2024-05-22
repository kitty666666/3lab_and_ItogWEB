import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'foundation-sites/dist/css/foundation.min.css';
import './App.css'; 

const OrderConfirmationPage = () => {
  const navigate = useNavigate();

  return (
    <div className="confirmation-container">
      <div className="confirmation-box">
        <h1 className="confirmation-text">Заказ подтвержден</h1>
        <p>Спасибо за ваш заказ, вы нереально крутой человечек! Ваш номерок заказа: <strong>#123456</strong></p>
        <p>Мы отправим вам подтверждение по электронной почте с деталями вашего заказа и информацией о доставке. Хорошего дня!</p>
        <button className="button large primary" onClick={() => navigate('/catalog')}>
          Вернуться к каталогу
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
