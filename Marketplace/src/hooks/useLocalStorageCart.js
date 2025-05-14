import { useState, useEffect } from 'react';

export function useLocalStorageCart(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch (error) {
      console.error('Ошибка чтения localStorage:', error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Ошибка записи в localStorage:', error);
    }
  }, [key, value]);

  return [value, setValue];
}
