// Button.js
import React from 'react';

const Button = ({ border, bg, textColor, btnText }) => {
  return (
  <button 
  className={`py-3 px-6 w-28 rounded-md transform transition-all duration-300 ease-in-out ${border} ${bg} ${textColor}`}
  style={{ transformOrigin: 'top center' }} // Ensures the transformation origin is top center
  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
>
  {btnText}
</button>

  );
};

export default Button;
