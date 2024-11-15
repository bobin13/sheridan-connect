// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const API_URL = 'http://10.0.2.2:5081/api';

// const api = axios.create({
//     baseURL: API_URL,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
  
//   api.interceptors.request.use(
//     async (config) => {
//       const token = await AsyncStorage.getItem('token');
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//       return config;
//     },
//     (error) => {
//       return Promise.reject(error);
//     }
//   );
  
//   export const register = (userData) => api.post('/auth/register', userData);
//   export const login = (credentials) => api.post('/auth/login', credentials);

//   export default api;
import axios from 'axios';

const BASE_URL = 'http://10.0.2.2:5081/api/v1/Auth';

// const register = async (name, email, age, password) => {
//   return await axios.post(`${API_URL}/register`, { name, email, age, password });
// };

// const login = async (email, password) => {
//   return await axios.post(`${API_URL}/login`, { email, password });
// };

export const SIGNUP_URL = `${BASE_URL}/register`;
export const LOGIN_URL = `${BASE_URL}/login`;

//export default { register, login };
