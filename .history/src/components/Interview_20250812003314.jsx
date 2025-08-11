import React from 'react';
import PropTypes from 'prop-types';
import  CometCard  from './Card.jsx'; // Add this import
import Elevate from "../components/Elevate.jsx"

const companyLogos = [
  './placed/accenture.png',
  './placed/bharatforge.png',
  './placed/hexaware.png',
  './placed/infosys.png',
  './placed/mahindra.png',
  './placed/tatacommu.png',
  './placed/tcs.png',
  './placed/wipro.png',
  './placed/zensoft.png',
];

const studentExperiences = [
  // ... your existing student experiences data
];

const ExperienceCard = ({ student }) => (
  <CometCard className="h-[30vh] bg-white text-black p-6 rounded-lg" rotateDepth={10} translateDepth={12}>
    <div className="flex">
      <h3 className="text-xl font-bold">
        {student.name}
        <span className="text-green-800 font-medium">Placed at {student.job}</span>
      </h3>
    </div>
    <p className="text-gray-700 text-sm mt-2">{student.paragraph}</p>
  </CometCard>
);

ExperienceCard.propTypes = {
  student: PropTypes.shape({
    name: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
  }).isRequired,
};

const Interview = () => {
  return (
    <div className="w-full pt-40 select-none">
      <div className="w-[70vw] mx-auto">
        <h1 className="text-center font-[font3] tracking-tighter text-[6vh]">
          Learn from Real-Life <span className="text-green-800 font-[font2]">INTERVIEW EXP</span> of our students
        </h1>
        <p className="text-center text-md font-[font3]">
          Experience the perfect blend of Culture, Technology, and Athleticism at our captivating events, where
          innovation meets tradition in a spectacular showcase of talent and passion. Join us on an exhilarating journey
          through the realms of Culture, Technology, and Sports.
        </p>

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
