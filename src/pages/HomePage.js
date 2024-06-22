import React from 'react';
import { useCategories } from '../contexts/CategoryContext';
import Card from '../components/Card';
import ControlButtons from '../components/ControlButtons';

function HomePage({ data, currentIndex, handleButtonClick }) {
  const { selectedCategories } = useCategories();
  const filteredData = data.filter(item => 
    item.Approve === null && (selectedCategories.includes(item.Category))
  );

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="relative w-full max-w-[320px] mx-4 sm:max-w-md">
          {filteredData.length > 0 && (
            <>
              <Card data={filteredData} currentIndex={currentIndex} />
              <ControlButtons handleButtonClick={handleButtonClick} />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default HomePage;
