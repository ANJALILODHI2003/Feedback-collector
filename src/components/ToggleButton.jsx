import React from 'react';

const ToggleButton = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      className={`px-4 py-2 rounded shadow-md transition-colors duration-300
        ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}
      onClick={toggleDarkMode}
    >
      {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default ToggleButton;
