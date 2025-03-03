import React from "react";
import ThreeCanvas from "../components/ThreeCanvas";
const Zajno = () => {
  return (
    <div className="overflow-x-hidden">
        <ThreeCanvas />
          <div className="landing relative bg-white ">
            <img className="opacity-0" src="./logo.png" alt="Logo" />
          </div>
    </div>
  );
};

export default Zajno;
