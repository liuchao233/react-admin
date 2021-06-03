import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
  timeout: 1000,
})

instance.interceptors.response.use(function (response) {
  return response.data;
})

export default instance;