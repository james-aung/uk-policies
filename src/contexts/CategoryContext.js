import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const CategoryContext = createContext();

export const useCategories = () => useContext(CategoryContext);

export const CategoryProvider = ({ children }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    if (selectedCategories.length === 0) {
      navigate('/categories'); // Navigate when selectedCategories is empty
    }
  }, [selectedCategories, navigate]); // Add navigate to dependency array

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