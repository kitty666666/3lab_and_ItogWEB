import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'foundation-sites/dist/css/foundation.min.css';
import './App.css'; 

const DeliveryPage = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Ваш заказик оформлен!');
    // Очистка полей формы
    setName('');
    setAddress('');
    setPhone('');
    navigate('/payment');
  };

  return (
    <div className="delivery-container">
      <div className="delivery-box">
        <h1 className="delivery-text">Оформление доставки</h1>
        <form onSubmit={handleSubmit} className="delivery-form">
          <label>
            Имя:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Адрес:
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </label>
          <label>
            Телефон:
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </label>
          <button className="button large primary" type="submit">
            Перейти к оплате
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeliveryPage;
