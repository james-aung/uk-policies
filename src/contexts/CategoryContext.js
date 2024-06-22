import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const CategoryContext = createContext();

export const useCategories = () => useContext(CategoryContext);

export const CategoryProvider = ({ children }) => {
  const [selectedCategories, setSelectedCategories] = useState(() => {
    // Retrieve categories from local storage at initial load
    const savedCategories = localStorage.getItem('selectedCategories');
    return savedCategories ? JSON.parse(savedCategories) : [];
  });
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    if (selectedCategories.length === 0) {
      navigate('/categories'); // Navigate when selectedCategories is empty
    }
  }, [selectedCategories, navigate]); // Add navigate to dependency array

  useEffect(() => {
    // Save selectedCategories to local storage whenever they change
    localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories));
  }, [selectedCategories]);

  const handleCategoryChange = (category) => {
    setSelectedCategories(prevSelected => 
      prevSelected.includes(category) 
        ? prevSelected.filter(item => item !== category) 
        : [...prevSelected, category]
    );
  };

  return (
    <CategoryContext.Provider value={{ selectedCategories, handleCategoryChange }}>
      {children}
    </CategoryContext.Provider>
  );
};