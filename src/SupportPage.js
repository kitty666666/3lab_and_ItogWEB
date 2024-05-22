import React, { useState } from 'react';
import 'foundation-sites/dist/css/foundation.min.css';
import './App.css';

const SupportPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Вы отправили сообщение! Мы обязательно поможем Вам;)');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="grid-container full">
      <div className="grid-x grid-padding-x align-center-middle text-center" style={{ minHeight: '100vh' }}>
        <div className="cell small-10 medium-8 large-6">
          <div className="callout large primary">
            <h1 className="support-text">Связаться с поддержкой</h1>
            <form onSubmit={handleSubmit} className="support-form">
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
                Электронная почта:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <label>
                Сообщение:
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </label>
              <button className="button large primary" type="submit">
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
