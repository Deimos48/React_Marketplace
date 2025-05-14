import React from 'react';
import './FilterPanel.css';

function FilterPanel({ filters, setFilters }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <aside className="filter-panel">
      <h3>Фильтры</h3>

      <label>Минимальная цена:</label>
      <input
        type="number"
        name="minPrice"
        value={filters.minPrice}
        onChange={handleChange}
      />

      <label>Максимальная цена:</label>
      <input
        type="number"
        name="maxPrice"
        value={filters.maxPrice}
        onChange={handleChange}
      />

      <label>Категория:</label>
      <select
        name="category"
        value={filters.category}
        onChange={handleChange}
      >
        <option value="">Все</option>
        <option value="Телефоны">Телефоны</option>
        <option value="Ноутбуки">Ноутбуки</option>
        <option value="Наушники">Наушники</option>
      </select>
    </aside>
  );
}

export default FilterPanel;
