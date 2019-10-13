import axios from 'axios';

const api = axios.create({
  baseURL: `https://svcs.sandbox.ebay.com`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
