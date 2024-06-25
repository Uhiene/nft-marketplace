// Button.js
import React from 'react';

const Button = ({ border, bg, textColor, btnText, className }) => {
  return (
    <button
      className={`py-2 px-4 min-w-28 rounded-full shadow-md shadow-blue-700 transform transition-all duration-300 ease-in-out ${border} ${bg} ${textColor} ${className}`}
      style={{ transformOrigin: 'top center' }} // Ensures the transformation origin is top center
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      {btnText}
    </button>

  );
};

export default Button;
