import React, { useState } from "react";

const Backgroundclr = () => {
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";

    
    for (var i = 0; i < 6; i++) {
    //   color += letters[Math.floor(Math.random() * 16)];
      color =  color + letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const [color, setcolor] = useState(getRandomColor());

  const colorchange = () => {
    setcolor(getRandomColor());
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center w-full`} // tailwind classs cssss
      style={{
        backgroundColor: color,
      }}
    >
        <>{color}</>
      <button
        className="bg-slate-600 md:bg-red-500 lg:bg-lime-800  p-10 rounded-md text-white py-6 cursor-pointer hover:bg-slate-500 "
        onClick={colorchange}
      >
        Background
      </button>
    </div>
  );
};

export default Backgroundclr;
