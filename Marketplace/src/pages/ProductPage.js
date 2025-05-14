import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css';

// Импорт локальных изображений
import GalaxyS24 from '../components/Pictures/Products/samsung-galaxy-s24.jpg';
import Lenovo from '../components/Pictures/Products/lenovo-laptop.jpg';
import SonyHeadphones from '../components/Pictures/Products/Sony-headphones.jpeg';

import { CartContext } from '../context/CartContext';
import { useContext } from 'react';



function ProductPage() {
  const { id } = useParams(); // получаем id из URL

  const { addToCart } = useContext(CartContext);

  // Локальные данные с изображениями
  const products = [
    { id: 1, name: 'Смартфон Galaxy', price: 29999, 
      description: 'Мощный смартфон с AMOLED экраном.', 
      image: GalaxyS24
    },
    { id: 2, name: 'Ноутбук Lenovo', price: 59999, 
      description: 'Надёжный ноутбук для работы и игр.', 
      image: Lenovo 
    },
    { id: 3, name: 'Наушники Sony', price: 8999, 
      description: 'Высокое качество звука и шумоподавление.', 
      image: SonyHeadphones
    },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Товар не найден</div>;
  }

  return (
    <div className="product-page">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <h3>Цена: {product.price}₽</h3>
        <button className="add-to-cart-btn" onClick={() => addToCart(product)} >
          Добавить в корзину
        </button>
      </div>
    </div>
  );
}

export default ProductPage;
