import { useState } from 'react';
import { api } from '../services/api';

export const useWeather = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const getWeather = async (city: string) => {
    if (!city.trim()) return;
    setLoading(true);
    try {
      const res = await api.get('weather', { params: { q: city } });
      setData(res.data);
    } catch (err) {
      setData(null);
    } finally {
      setLoading(false);
    }
  };
  return { data, loading, getWeather };
};