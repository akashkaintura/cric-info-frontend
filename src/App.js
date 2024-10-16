import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
// import MatchPage from './pages/MatchPage';
import MatchDetails from './components/MatchDetails';

const App = () => {
  return (
    <ThemeProvider>
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/match/:matchId" element={<MatchDetails />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
