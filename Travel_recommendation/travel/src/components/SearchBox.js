// src/components/SearchBox.js
import React, { useState } from 'react';

const SearchBox = ({ searchTerm, onSearchChange }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const places = ['Manali', 'Chennai', 'Andaman', 'Goa', 'Varanasi', 'Bali'];

  const handleChange = (e) => {
    onSearchChange(e.target.value);
    setShowDropdown(e.target.value !== '');
  };

  const handleSelect = (place) => {
    onSearchChange(place);
    setShowDropdown(false);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search places"
      />
      {showDropdown && (
        <ul className="dropdown">
          {places
            .filter((place) => place.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((place) => (
              <li key={place} onClick={() => handleSelect(place)}>
                {place}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
