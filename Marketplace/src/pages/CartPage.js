import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import './CartPage.css';

function CartPage() {
  const { cartItems, setCartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleOrder = () => {
    setOrderPlaced(true);
    setCartItems([]); // очищаем корзину через контекст
  };

  if (orderPlaced) {
    return <h2 className="success">Спасибо за заказ! Мы с вами свяжемся.</h2>;
  }

  if (cartItems.length === 0) {
    return <h2 className="empty">Корзина пуста</h2>;
  }

  return (
    <div className="cart-page">
      <h2>Корзина</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div className="info">
            <h3>{item.name}</h3>
            <p>Цена: {item.price}₽</p>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
            />
            <button onClick={() => removeFromCart(item.id)}>Удалить</button>
          </div>
        </div>
      ))}
      <h3 className="total">Итого: {total}₽</h3>
      <button className="order-btn" onClick={handleOrder}>Оформить заказ</button>
    </div>
  );
}

export default CartPage;
