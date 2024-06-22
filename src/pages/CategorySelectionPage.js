import React from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryCheckboxes from '../components/CategoryCheckboxes';
import { useCategories } from '../contexts/CategoryContext';

function CategorySelectionPage(data) {
  const { selectedCategories, handleCategoryChange } = useCategories();
  const categories = Array.from(new Set(data.data.map(item => item.Category)));
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/');
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-2xl font-bold mb-4 text-center'>Select the categories of policies you want to see:</h1>
      <CategoryCheckboxes 
        categories={categories} 
        selectedCategories={selectedCategories} 
        handleCategoryChange={handleCategoryChange} 
      />
      <button 
        onClick={handleContinue} 
        className='mt-4 px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white'
      >
        Continue
      </button>
    </div>
  );
}

export default CategorySelectionPage;