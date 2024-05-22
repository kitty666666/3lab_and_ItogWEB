import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'foundation-sites/dist/css/foundation.min.css';
import './App.css'; 

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Оплата прошла успешно!');
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
    navigate('/order-confirmation');
  };

  return (
    <div className="payment-container">
      <div className="payment-box">
        <h1 className="payment-text">Оплата</h1>
        <form onSubmit={handleSubmit} className="payment-form">
          <label>
            Номер карты:
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </label>
          <label>
            Дата окончания:
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
            />
          </label>
          <label>
            CVV:
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </label>
          <button className="button large primary" type="submit">
            Оплатить
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
