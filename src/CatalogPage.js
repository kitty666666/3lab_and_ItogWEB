import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import 'foundation-sites/dist/css/foundation.min.css';
import './App.css'; 

const CatalogPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="catalog-container"><p>Загрузка...</p></div>;
  }

  if (error) {
    return <div className="catalog-container"><p>Произошла ошибка: {error.message}</p></div>;
  }

  return (
    <div className="catalog-container">
      <div className="catalog-box">
        <h1 className="catalog-text">Каталог товаров</h1>
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} className="product-image"/>
              <h2 className="product-title">{product.title}</h2>
              <p className="product-price">${product.price}</p>
              <button className="button small add-to-cart-button" onClick={() => addToCart(product)}>
                Добавить в корзину
              </button>
            </div>
          ))}
        </div>
        <button className="button large primary" onClick={() => navigate('/cart')}>
          Перейти к корзине
        </button>
      </div>
    </div>
  );
};

export default CatalogPage;
