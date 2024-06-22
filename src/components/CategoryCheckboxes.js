import React from 'react';

function CategoryCheckboxes({ categories, selectedCategories, handleCategoryChange }) {
    const sortedCategories = [...categories].sort();
    return (
      <div>
        <div className="container mx-auto flex flex-wrap justify-center items-center">
          {sortedCategories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-2 py-1 m-1 rounded-full text-xs font-medium border-2 ${selectedCategories.includes(category) ? 'bg-green-600 border-green-600' : 'bg-transparent border-green-600'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    );
}

export default CategoryCheckboxes;
