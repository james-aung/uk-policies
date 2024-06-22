import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CategoryProvider } from './contexts/CategoryContext'; // Import the provider
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';
import CategorySelectionPage from './pages/CategorySelectionPage';
import usePolicyData from './hooks/usePolicyData';

function App() {
  const { data, currentIndex, handleButtonClick, resetData } = usePolicyData();

  return (
    <Router>
      <Navbar onReset={resetData} />
      <CategoryProvider> {/* Wrap the routes in the CategoryProvider */}
        <Routes>
          <Route path="/" element={<HomePage data={data} currentIndex={currentIndex} handleButtonClick={handleButtonClick} />} />
          <Route path="/results" element={<ResultsPage data={data} />} />
          <Route path="/categories" element={<CategorySelectionPage data={data} />} />
        </Routes>
      </CategoryProvider>
    </Router>
  );
}

export default App;