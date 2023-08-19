import React, { useState } from 'react';
import AppleImage from '../img/applepiesmall.jpg';
import CherryImage from '../img/cherrypiesmall.jpg';
import CranberryImage from '../img/cranberrypiesmall.jpg';
import logo from '../img/bethanylogo.png';

export default function Pie() {
  const options = [
    { value: '', label: 'Select your Pie',imageUrl:logo },
    { value: 'apple', label: 'Apple Pie', imageUrl: AppleImage },
    { value: 'cherry', label: 'Cherry Pie', imageUrl: CherryImage },
    { value: 'cranberry', label: 'Cranberry Pie', imageUrl:CranberryImage },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    const selectedOption = options.find(option => option.value === selectedValue);
    setSelectedOption(selectedOption);
  };

  return (
    <div className='container'>
      
      <select value={selectedOption.value} onChange={handleSelectChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div>       
        <p>{selectedOption.label}</p>
        <img src={selectedOption.imageUrl} alt={selectedOption.label} />
      </div>
    </div>
  );
}


