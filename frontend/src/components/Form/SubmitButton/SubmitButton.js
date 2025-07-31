import React from 'react';

function SubmitButton({ type, text }) {
  return (
    <button 
      className="bg-[#18c1ce] hover:bg-black text-white font-bold py-2 px-4 rounded mt-4"
      type={type} 
    >
      {text}
    </button>
  )
}

export default SubmitButton;
