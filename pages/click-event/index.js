import { useState } from "react";

const ClickEvent = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  return (
    <div className="min-h-screen grid place-items-center">
      <button 
        className={`shadow-md ${isClicked ? 'bg-red-400 shadow-red-400/75' : 'bg-blue-400 shadow-blue-400/75'} w-20 py-2 rounded-lg text-white font-bold transition-all duration-200 ease-in-out`}
        onClick={handleClick}
      >
        {isClicked ? 'Merah' : 'Biru'}
      </button>
    </div>
  );
};

export default ClickEvent;
