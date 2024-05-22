// маршрутизатор для компонентов

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import RegisterPage from './RegisterPage';
import SupportPage from './SupportPage';
import LoginPage from './LoginPage';
import CatalogPage from './CatalogPage';
import CartPage from './CartPage'; 
import DeliveryPage from './DeliveryPage'; 
import PaymentPage from './PaymentPage'; 
import OrderConfirmationPage from './OrderConfirmationPage'; 
import { CartProvider } from './CartContext'; 
import './App.css'; 
import 'foundation-sites/dist/css/foundation.min.css';

// адреса для перемещения 
const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/delivery" element={<DeliveryPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/order-confirmation" element={<OrderConfirmationPage />} /> 
        </Routes>
      </Router>
    </CartProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
