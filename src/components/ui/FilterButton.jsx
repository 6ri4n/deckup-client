import React, { useState } from "react";

const FilterButton = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    console.log("Selected filter option:", option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Filter
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
          <div className="py-1">
            <button
              onClick={() => handleOptionClick("Option 1")}
              className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Option 1
            </button>
            <button
              onClick={() => handleOptionClick("Option 2")}
              className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Option 2
            </button>
            <button
              onClick={() => handleOptionClick("Option 3")}
              className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Option 3
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterButton;
