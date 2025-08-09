import React from "react";
import cn  from "classnames";
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
          "animate-spotlight pointer-events-none absolute z-[1] h-[110%] w-[200%] lg:w-[84%] opacity-0",
          className
        )}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 3787 2842"
        fill="none"
      >
        <g filter="url(#filter)">
          <ellipse
            cx="1924.71"
            cy="273.501"
            rx="1924.71"
            ry="273.501"
            transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
            fill={fill}
            fillOpacity="0.45"
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
    <div className="relative min-h-screen overflow-hidden">
      <Spotlight 
        className="top-0 left-48" 
        fill="#3B6654" 
      />
      <div className="relative z-10">
        <Floating/>
      </div>
      <div className="h-screen w-full flex items-center justify-center">
        <div className="w-[45%] pl-12">
            <h3 className="font-[font3] font-regular text-[3.2vh]">Presented by</h3>
            <h2 className="font-[font4] text-[3.7vh] mt-5 font-regular">Electronics and Telecommunication Department</h2>
        </div>
        <div className="flex w-[50%]">
            <img className="h-[33vh]" src="./images/tesahalf.png" alt="" />
            <div className="flex flex-col text-center relative -top-14 text-zinc-800 font-[font1]">
                <h1 className="text-[26vh]  font-semibold -mb-12" >TESA</h1>
                <h3 className="text-[2.4vh] font-semibold ">TELECOM ENGINEER'S STUDENT ASSOCIATION</h3>
                <h3 className="text-[2.3vh] font-semibold  -mt-1">WE CREATE.YOU CELEBRATE</h3>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
