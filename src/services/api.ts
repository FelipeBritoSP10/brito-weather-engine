import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
  params:{
      appid: '6e0833423cf23c20a4551c408d56036e',
      units: 'metric',
      lang: 'pt-br',
  },
});