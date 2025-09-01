import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Send cookies with requests
});

// Add a request interceptor to attach the JWT token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Assuming JWT token is stored in localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth Endpoints
export const registerUser = async (userData: any) => {
  const response = await api.post('/auth/register', userData);
  // Optionally store token here if API returns it immediately on register
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
  }
  return response.data;
};

export const loginUser = async (credentials: any) => {
  const response = await api.post('/auth/login', credentials);
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
  }
  return response.data;
};

export const logoutUser = () => {
  localStorage.removeItem('token');
  // Invalidate session on backend if necessary
};

export const getProfile = async () => {
  const response = await api.get('/auth/profile');
  return response.data;
};

// Group Endpoints (Placeholders)
export const createGroup = async (groupData: any) => {
  return api.post('/groups', groupData);
};

export const getGroups = async () => {
  return api.get('/groups');
};

export default api;
