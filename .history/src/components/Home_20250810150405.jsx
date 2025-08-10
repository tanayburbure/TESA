import React from "react";
import cn from "classnames";
import Floating from "./Floating";

// Spotlight Component
const Spotlight = ({
  className,
  fill = "black"
}) => {
  return (
    <>
      <style>
        {`
          @keyframes spotlight {
            0% {
              opacity: 0;
              transform: translate(-72%, -62%) scale(0.5);
            }
            100% {
              opacity: 1;
              transform: translate(-50%, -40%) scale(1);
            }
          }
          
          .animate-spotlight {
            animation: spotlight 3s ease 0.75s 1 forwards;
          }
        `}
      </style>
      
      <svg
        className={cn(
          "animate-spotlight pointer-events-none absolute h-[110%] w-full max-w-[100vw] opacity-0",
          // Changed from w-[200%] to w-full max-w-[100vw] to prevent overflow
          className
        )}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 3787 2842"
        fill="none"
        style={{ left: 0 }} // Ensure SVG doesn't extend beyond left edge
      >
        <g filter="url(#filter)">
          <ellipse
            cx="1924.71"
            cy="273.501"
            rx="1924.71"
            ry="273.501"
            transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
            fill={fill}
            fillOpacity="0.55"
          />
        </g>
        <defs>
          <filter
            id="filter"
            x="0.860352"
            y="0.838989"
            width="3785.16"
            height="2840.26"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur_1065_8" />
          </filter>
        </defs>
      </svg>
    </>
  );
};

// Main App Component with Spotlight Usage
const Home = () => {
  return (
    <div className="h-[80vh] overflow-hidden relative">
      {/* Added overflow-hidden and relative positioning */}
      <Spotlight 
        className="top-0 left-[10%]" 
        fill="#3B6654" 
      />
      <div className="relative">
        <Floating/>
      </div>
      <div className="h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Added overflow-hidden to this container as well */}
        <div className="w-[40%] pl-6 no-draw min-w-0">
          {/* Added min-w-0 to prevent flex item from expanding beyond container */}
          <h3 className="font-[font3] font-regular text-[2.9vh]">Presented by</h3>
          <h2 className="font-[font4] text-[3.3vh] mt-3 font-regular">Electronics and Telecommunication Department</h2>
        </div>
        <div className="flex w-[50%] pl-8 min-w-0">
          {/* Added min-w-0 here too */}
          <img className="h-[33vh] no-draw flex-shrink-0" src="./images/tesahalf.png" alt="" />
          {/* Added flex-shrink-0 to prevent image from shrinking */}
          <div className="flex flex-col no-draw text-center relative -top-14 text-zinc-800 font-[font1] min-w-0">
            {/* Added min-w-0 to text container */}
            <h1 className="text-[26vh] text-[#222831] font-semibold -mb-12 whitespace-nowrap">TESA</h1>
            {/* Added whitespace-nowrap to prevent text wrapping issues */}
            <h3 className="text-[2.5vh] font-regular">TELECOM ENGINEER'S STUDENT ASSOCIATION</h3>
            <h3 className="text-[2.4vh] font-regular -mt-1">WE CREATE.YOU CELEBRATE</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
