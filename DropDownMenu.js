import React, { useState } from 'react';

const DropdownMenu = () => {
  // State to manage the dropdown
  const [selectedOption, setSelectedOption] = useState(null);

  // Options for the dropdown
  const options = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4'
  ];

  // Event handler for when an option is selected
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <div>
        <select
          value={selectedOption}
          onChange={(e) => handleOptionSelect(e.target.value)}
          className="border-2 p-3 pr-2 text-md"
          style={{ width: '200px' }} // Adjust the width as needed
        >
          <option value="something">Type</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DropdownMenu;
