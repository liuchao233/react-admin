import axios from 'axios';
import { message } from 'antd';
// import { history } from '@/routes';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  // timeout: 1000,
})

instance.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  message.error(error)
  console.error(error);
  // history.push('/') ?? or logout;
  return Promise.reject(error);
})

export default instance;