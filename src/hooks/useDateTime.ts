import { useState, useEffect } from 'react';

export const useDateTime = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = now.getHours();
  const greeting = hours < 12 ? 'Bom dia' : hours < 18 ? 'Boa tarde' : 'Boa noite';
  
  return {
    greeting,
    time: now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
    date: now.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' }).toUpperCase(),
    icon: hours < 12 ? '☀️' : hours < 18 ? '🌤️' : '🌙'
  };
};