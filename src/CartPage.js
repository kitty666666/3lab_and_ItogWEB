import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import 'foundation-sites/dist/css/foundation.min.css';
import './App.css'; 

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <div className="cart-box">
        <h1 className="cart-text">Корзина</h1>
        {cart.length === 0 ? (
          <p>Упс, Ваша корзина пуста.</p>
        ) : (
          <div className="cart-items">
            {cart.map((product, index) => (
              <div key={index} className="cart-item">
                <img src={product.image} alt={product.title} className="cart-item-image"/>
                <div className="cart-item-details">
                  <h2 className="cart-item-title">{product.title}</h2>
                  <p className="cart-item-price">${product.price}</p>
                  <button className="button small remove" onClick={() => removeFromCart(index)}>
                    Удалить
                  </button>
                </div>
              </div>
            ))}
            <div className="cart-total">
              <h2>Общая стоимость: ${calculateTotal()}</h2>
            </div>
          </div>
        )}
        <button className="button large primary" onClick={() => navigate('/catalog')}>
          Перейти к каталогу
        </button>
        {cart.length > 0 && (
          <button className="button large secondary" onClick={() => navigate('/delivery')}>
            Оформить заказик
          </button>
        )}
      </div>
    </div>
  );
};

export default CartPage;
