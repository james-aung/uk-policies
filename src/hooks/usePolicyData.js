import { useState, useEffect } from 'react';
import { fetchData, saveData } from '../utils/fetchData';

function usePolicyData() {
  // State to hold the policy data, initialized from localStorage if available
  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to initialize data if not already present in localStorage
    async function initializeData() {
      try {
        let savedData = localStorage.getItem('policyData');
        if (!savedData) {
          const rows = await fetchData('/data.csv');
          savedData = JSON.stringify(rows);
          localStorage.setItem('policyData', savedData);
        }
        setData(JSON.parse(savedData));
      } catch (error) {
        console.error('Failed to fetch or parse data:', error);
        setData([]); // Ensure data is still an array even on error
      }
    }
    initializeData();
  }, []);

  // State to keep track of the current index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle button click and update approval status
  const handleButtonClick = (approval) => {
    setData(currentData => {
      const updatedData = currentData.map((item, index) => 
        index === currentIndex ? { ...item, Approve: approval } : item
      );
      saveData(updatedData);
      return updatedData;
    });
    // Update the current index to the next item, wrapping around if necessary
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  // Function to reset data by fetching it again from the server
  const resetData = async () => {
    const rows = await fetchData('/data.csv');
    setData(rows);
    saveData(rows);
    setCurrentIndex(0);
  };

  // Return the state and functions to be used by components
  return { data, currentIndex, handleButtonClick, resetData };
}

export default usePolicyData;