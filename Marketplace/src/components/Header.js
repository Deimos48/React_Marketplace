import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { CartContext } from '../context/CartContext';

function Header() {
  const { cartItems } = useContext(CartContext);

  // Считаем общее количество товаров в корзине
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">My Marketplace</Link>
        </div>
        <nav className="nav">
          <Link to="/">Главная</Link>
          <Link to="/cart" className="cart-link">
            Корзина
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </Link>
          <Link to="/auth">Войти</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
