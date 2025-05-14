import React, { useState } from 'react';
import './AuthPage.css';

function AuthPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [registered, setRegistered] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Здесь могла бы быть логика отправки на сервер
    console.log('Зарегистрирован пользователь:', formData);

    setRegistered(true);
  };

  if (registered) {
    return <h2 className="auth-success">Регистрация прошла успешно!</h2>;
  }

  return (
    <div className="auth-page">
      <h2>Регистрация</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default AuthPage;
