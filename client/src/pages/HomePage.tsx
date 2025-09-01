import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Shared Task Organizer!</h1>
      <p className="text-xl text-gray-600 mb-8">Your solution for managing tasks, projects, and events collaboratively.</p>
      <div className="flex justify-center space-x-4">
        {/* Example Call to Actions */}
        {/* <Link to="/auth" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md shadow-md transition duration-300">Get Started</Link> */}
        {/* <Link to="/dashboard" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-md shadow-md transition duration-300">View My Tasks</Link> */}
      </div>
    </div>
  );
};

export default HomePage;
