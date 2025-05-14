import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import FilterPanel from '../components/FilterPanel';

import phoneImage from '../components/Pictures/Products/samsung-galaxy-s24.jpg';
import laptopImage from '../components/Pictures/Products/lenovo-laptop.jpg';
import headphonesImage from '../components/Pictures/Products/Sony-headphones.jpeg';

function HomePage() {
  const allProducts = [
    { id: 1, name: 'Смартфон Galaxy', price: 29999, category: 'Телефоны', image: phoneImage },
    { id: 2, name: 'Ноутбук Lenovo', price: 59999, category: 'Ноутбуки', image: laptopImage },
    { id: 3, name: 'Наушники Sony', price: 8999, category: 'Наушники', image: headphonesImage },
    { id: 4, name: 'Смартфон iPhone', price: 99999, category: 'Телефоны', image: phoneImage },
    { id: 5, name: 'Ноутбук HP', price: 45000, category: 'Ноутбуки', image: laptopImage },
  ];

  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    category: '',
  });

  const filteredProducts = allProducts.filter(product => {
    const matchMin = !filters.minPrice || product.price >= parseInt(filters.minPrice);
    const matchMax = !filters.maxPrice || product.price <= parseInt(filters.maxPrice);
    const matchCategory = !filters.category || product.category === filters.category;
    return matchMin && matchMax && matchCategory;
  });

  return (
    <div className="home-container">
      <FilterPanel filters={filters} setFilters={setFilters} />
      <main className="product-list">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Цена: {product.price}₽</p>
            <Link to={`/product/${product.id}`} className="btn">Подробнее</Link>
          </div>
        ))}
        {filteredProducts.length === 0 && <p>Товары по фильтру не найдены.</p>}
      </main>
    </div>
  );
}

export default HomePage;
