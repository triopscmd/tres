import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Task Organizer
        </Link>
        <div className="space-x-4">
          {/* Placeholder for auth status */}
          <Link to="/auth">
            <Button variant="secondary">Login / Register</Button>
          </Link>
          {/* <Button variant="primary">Dashboard</Button> */}
          {/* <Button variant="secondary">Logout</Button> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
