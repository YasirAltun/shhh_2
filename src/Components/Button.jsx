import React from 'react';

function Button() {
  const handleClick = () => {
    alert('Simple Button Clicked!');
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me (Simple)</button>
    </div>
  );
}

export default Button;