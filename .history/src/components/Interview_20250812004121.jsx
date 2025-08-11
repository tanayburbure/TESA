import React from 'react';
import PropTypes from 'prop-types';
import  CometCard  from './Card.jsx';// Import the clean CometCard
import Elevate from "./components/Elevate.jsx"

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

        <div className="flex justify-center gap-4 mt-8">
          <button className="bg-green-800 px-8 py-3 rounded-lg hover:bg-green-900 transition-colors">
            Placement report
          </button>
          <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Share Experience
          </button>
        </div>

        {/* Student Experience Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {studentExperiences.map((student, index) => (
            <ExperienceCard key={index} student={student} />
          ))}
        </div>
      </div>

      <div className="company mt-32">
        <h2 className="text-center text-[3vw]">OUR TOP RECRUITERS</h2>
        <style>
          {`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-33.3333%); }
            }
            .scroll-outer {
              overflow: hidden;
              white-space: nowrap;
            }
            .scroll-track {
              display: inline-flex;
              gap: 2rem;
              width: 300%;
              animation: scroll 10s linear infinite;
              will-change: transform;
              backface-visibility: hidden;
              transform: translateZ(0);
              -webkit-font-smoothing: antialiased;
            }
            .scroll-track:hover {
              animation-play-state: paused;
            }
            @media (prefers-reduced-motion: reduce) {
              .scroll-track {
                animation-duration: 9s;
              }
            }
          `}
        </style>
        <div className="place py-8">
          <div className="scroll-outer">
            <div className="scroll-track">
              <div className="inline-flex gap-8">
                {companyLogos.map((img, index) => (
                  <img
                    key={`a-${index}`}
                    src={img}
                    alt={`Company ${index + 1}`}
                    className="h-20 w-auto object-contain"
                  />
                ))}
              </div>
              <div className="inline-flex gap-8">
                {companyLogos.map((img, index) => (
                  <img
                    key={`b-${index}`}
                    src={img}
                    alt={`Company ${index + 1}`}
                    className="h-20 w-auto object-contain"
                  />
                ))}
              </div>
              <div className="inline-flex gap-8">
                {companyLogos.map((img, index) => (
                  <img
                    key={`c-${index}`}
                    src={img}
                    alt={`Company ${index + 1}`}
                    className="h-20 w-auto object-contain"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Elevate/>
    </div>
  );
};

export default Interview;
