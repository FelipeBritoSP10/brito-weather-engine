import { useState, useEffect } from 'react';

export const useWeatherStorage = () => {
  const [history, setHistory] = useState<string[]>(() => {
    const saved = localStorage.getItem('@Brito:history');
    return saved ? JSON.parse(saved) : [];
  });

  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('@Brito:favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('@Brito:history', JSON.stringify(history));
    localStorage.setItem('@Brito:favorites', JSON.stringify(favorites));
  }, [history, favorites]);

  const saveSearch = (city: string) => {
    if (!city) return;
    setHistory(prev => [city, ...prev.filter(c => c !== city)].slice(0, 3));
  };

  const toggleFavorite = (city: string) => 
    setFavorites(prev => prev.includes(city) ? prev.filter(c => c !== city) : [...prev, city]);

  return { history, favorites, saveSearch, toggleFavorite };
};