import { useState, useEffect } from 'react';
import { getProfile, logoutUser } from '../api';

interface User {
  id: string;
  email: string;
  // Add other user properties as needed
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  logout: () => void;
}

const useAuth = (): AuthState => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const profile = await getProfile();
          setUser(profile.user);
          setIsAuthenticated(true);
        } catch (err: any) {
          console.error('Failed to fetch profile:', err);
          setError(err.response?.data?.message || 'Authentication failed');
          localStorage.removeItem('token'); // Clear invalid token
          setUser(null);
          setIsAuthenticated(false);
        }
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const logout = () => {
    logoutUser();
    setUser(null);
    setIsAuthenticated(false);
    // Potentially redirect to login page
  };

  return { user, isLoading, error, isAuthenticated, logout };
};

export default useAuth;
