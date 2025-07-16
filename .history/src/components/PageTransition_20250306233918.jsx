import { useState } from "react";

const BgColorTransition = () => {
  const colors = ["bg-blue-500", "bg-red-500", "bg-green-500", "bg-purple-500"];
  const [colorIndex, setColorIndex] = useState(0);

  const changeColor = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <div
      className={`h-screen flex justify-center items-center transition-colors duration-1000 ${colors[colorIndex]}`}
    >
      <button
        onClick={changeColor}
        className="px-6 py-3 text-white font-bold bg-black rounded-lg shadow-lg"
      >
        Change Background
      </button>
    </div>
  );
};

export default BgColorTransition;
