import React from 'react';
import PropTypes from 'prop-types';
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
  {
    name: 'Hrishikesh Deshpande',
    job: 'Hitech Electronics 2024',
    paragraph:
      "Telling brief about yourself- positive n negative sides of urself. Personally I did not worked on this stuff- so I found it a bit tough. Because we as a student just run behind the HR, technical questions and lastly get stuck in this type of questions. So also 'know yourself'. Multiple resources like Google, YouTube some questions from ppl who gave technical interview, Family member who were experts in their domain, also helped me to Crack the tech interview in this firm. Further having your own experience in your technical domain- like preparing your own stuff, what u know about your technical interests and revising them and to go deep in the same. (In simple language- Teko jo aata hai technical mein, wo tu pehle revise karr, bhale hardware/Software ho..usko prefer kar pehla)",
  },
  {
    name: 'Prajwal Bagekari',
    job: 'Wipro Pari 2024',
    paragraph:
      'I gained more in-depth understanding of that field by developing various projects and studying for the technical interview from the academic side. I have to continue learning and keep updating my projects. I was able to learn more about what an error signifies and the best practices for fixing it thanks to the platforms I used to address it, such as Google and Youtube. The interview process was excellent overall. For candidates present at the final interview, the corporation arranged lunch. The company is big. We must demonstrate our abilities, our desire to pick up new skills, and our passion. I was asked the following question: What exactly did I do for the project that I have detailed in my resume? What am I aware of in VLSI? what is microcontroller ? What was the IC number of that microcontroller? Several details on my internship experiences. What is my knowledge of the Latex language? additionally A few details included in our resume.The fact that we were divided into groups based on our employment roles was a challenging factor. Even though every member came from one of the key branches, I was nevertheless able to get this job.',
  },
  {
    name: 'Vaishnavi Ghatge',
    job: 'Bajaj Finserv 2023',
    paragraph:
      'What I experienced from my as well as my frnds interview is most of the companies dont go much deep they just ask you about the basics so having a strong hold on basics is much important. Also the way to represent matter a lots of confidence is what all you need. Important thing to note is never mention any extras in the resume just to show how much your resume weight mention only those things which you have actually worked on. Represent everything precisely starting from your name till your hobbies. So basically the question are asked mostly on the basis of what you have mentioned in your resume. I was a E&tc student so sometimes depends on interviewer they ask you about your trade even. 1. Why I want to go in software being and E&tc student. 2.basics of E&tc (eg :- ohms law, resistor, capacitor such terms) 3. BE Project. 5. The software projects mention in my resume. 6. Java questions( syntax, Fibonacci series, palindrome series , OOPS) 7. Aptitude question ( i.e logical reasoning)......Having a firm hold on basics. It may be any interview either hardware or software yours basics are a must.',
  },
  {
    name: 'Snehal Shitole',
    job: 'Cognizant 2023',
    paragraph:
      'I have completed java full stack course so that helped me out to clear my technical interview , theory concepts were asked by interviewer and technical interview basically based on our resume so be prepared with your skills which u have mentioned in your resume , interviewer never ask anything out of your resume and project , he twist the questions and ask but the main concepts are related to your resume skills and project only 1.First of all he asked about team management skills 2.Details about my project 3.asked to solve two puzzles and logic building questions 4. About relocation and plans about higher studies.He twist the questions and asked to me , that was quite difficult to solve but it was all about logic so after few minutes i cleared that puzzle question and got selected for next round',
  },
];

const ExperienceCard = ({ student }) => (
  <div className="h-[30vh] bg-white text-black p-6 rounded-lg">
    <div className="flex">
      <h3 className="text-xl font-bold">
        {student.name}
        <span className="text-green-800 font-medium">Placed at {student.job}</span>
      </h3>
    </div>
    <p className="text-gray-700 text-sm mt-2">{student.paragraph}</p>
  </div>
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

      <div className="company mt-32">
        <h2 className="text-center text-[3vw]">Our Top Recruiters</h2>
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
                animation-duration: 15s;
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
