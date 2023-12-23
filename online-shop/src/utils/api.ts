import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000/640',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// api.interceptors.response.use((response) => {
//   console.log(response.data);
//   return response;
// });

// export const getJwt = async () => {};
