import React from "react";
import ThreeCanvas from "../components/ThreeCanvas";
const Zajno = () => {
  return (
    <div className="overflow-x-hidden">
        <ThreeCanvas />
          <div className="landing relative top-0 left-0 fixed ">
            <img className="opacity-0" src="./logo.png" alt="Logo" />
          </div>
    </div>
  );
};

export default Zajno;
