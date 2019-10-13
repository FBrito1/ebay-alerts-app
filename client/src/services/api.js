import axios from 'axios';

const api = axios.create({
  baseURL: 'http://server:3333',
});

export default api;
