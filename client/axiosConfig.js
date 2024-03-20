import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_URL, 
  // replace with backend url in the .env file later
  withCredentials: true,
});

export {instance};