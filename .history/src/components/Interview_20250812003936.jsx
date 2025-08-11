import React from 'react';
import PropTypes from 'prop-types';
import  CometCard  from './Card.jsx'; // Import the clean CometCard
import Elevate from "../components/Elevate.jsx"

// ... rest of your Interview component code stays exactly the same ...

const Interview = () => {
  return (
    <div className="w-full pt-40 select-none">
      <div className="w-[70vw] mx-auto">
        {/* ... your existing header content ... */}

        <div className="card flex gap-4 mt-8 text-black">
          <CometCard className="h-[20vh] w-1/3 bg-white rounded-lg flex flex-col items-center justify-center p-4" rotateDepth={10} translateDepth={12}>
            <img src="./images/s1.png" alt="Interview 1" className="h-24 w-24 object-cover mb-2" />
            <h2 className="text-lg font-medium text-center">500+ Students placed</h2>
          </CometCard>
          
          <CometCard className="h-[20vh] w-1/3 bg-white rounded-lg flex flex-col items-center justify-center p-4" rotateDepth={10} translateDepth={12}>
            <img src="./images/s2.png" alt="Interview 2" className="h-24 w-24 object-cover mb-2" />
            <h2 className="text-lg font-medium text-center">20+ MNC's</h2>
          </CometCard>
          
          <CometCard className="h-[20vh] w-1/3 bg-white rounded-lg flex flex-col items-center justify-center p-4" rotateDepth={10} translateDepth={12}>
            <img src="./images/s3.png" alt="Interview 3" className="h-24 w-24 object-cover mb-2" />
            <h2 className="text-lg font-medium text-center">10+ Core recruitments</h2>
          </CometCard>
        </div>

        {/* ... rest of your component stays the same ... */}
      </div>
    </div>
  );
};

export default Interview;
