import { useState } from 'react';
import { api } from '../services/api';

export const useWeather = (onSuccess?: (cityName: string) => void) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const getWeather = async (city: string) => {
    if (!city || !city.trim()) return;
    setLoading(true);
    try {
      const res = await api.get('weather', { params: { q: city } });
      setData(res.data);
      if (onSuccess) onSuccess(res.data.name);
    } catch (err) {
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, getWeather };
};