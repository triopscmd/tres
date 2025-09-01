import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { loginUser, registerUser } from '../api';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    try {
      if (isLogin) {
        const response = await loginUser({ email, password });
        setMessage(`Login successful: ${response.message}`);
        // Redirect or update auth context
      } else {
        const response = await registerUser({ email, password });
        setMessage(`Registration successful: ${response.message}`);
        setIsLogin(true); // Switch to login after successful registration
      }
    } catch (error: any) {
      setMessage(`Error: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        {isLogin ? 'Login' : 'Register'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full">
          {isLogin ? 'Login' : 'Register'}
        </Button>
      </form>
      {message && <p className="mt-4 text-center text-sm text-gray-600">{message}</p>}
      <p className="mt-6 text-center text-sm text-gray-600">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          {isLogin ? 'Register' : 'Login'}
        </button>
      </p>
    </div>
  );
};

export default AuthPage;
