import React, { useState } from 'react';
import FeedbackForm from '../components/FeedbackForm';
import FeedbackList from '../components/FeedbackList';
import ToggleButton from '../components/ToggleButton';

const Home = () => {
  const [showFeedbacks, setShowFeedbacks] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const toggleFeedbacks = () => {
    setShowFeedbacks(!showFeedbacks);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen py-8 px-4 transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-sky-100'}`}>
      
      {/* Heading and Buttons in a flex row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className={`text-3xl font-bold text-center md:text-left ${darkMode ? 'text-white' : 'text-black'}`}>
          Feedback Collector
        </h1>

        <div className="flex justify-center md:justify-end mt-4 md:mt-0 space-x-2">
          <button
            className={`px-4 py-2 rounded shadow-md transition-colors duration-300
              ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}
            onClick={toggleFeedbacks}
          >
            {showFeedbacks ? 'Hide Feedbacks' : 'Show Feedbacks'}
          </button>
          <ToggleButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </div>

      <div className="max-w-md mx-auto">
        <FeedbackForm />
      </div>

      {showFeedbacks && (
        <div className="mt-8">
          <FeedbackList />
        </div>
      )}
      <footer className={`text-center text-sm py-6 border-t ${darkMode ? 'text-white border-gray-700' : 'text-gray-500 border-gray-200'}`}>
  © {new Date().getFullYear()} Feedback Collector. Created by Anjali Lodhi.
</footer>



    </div>
    
  );
  
};

export default Home;
