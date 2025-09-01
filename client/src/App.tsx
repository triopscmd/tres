import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import Header from './components/layout/Header';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 font-sans antialiased">
        <Header />
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            {/* Add more routes here for groups, tasks, etc. */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
