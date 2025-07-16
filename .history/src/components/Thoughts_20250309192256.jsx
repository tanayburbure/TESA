import React from 'react';
import { PiStudentFill } from "react-icons/pi";

const studentThoughts = [
  {
    name: "Vaishnavi Ghatge",
    image: "./images/vaishnavi_ghatge.jpg",
    batch: "BE 23-24",
    thought: "As the Vice President of the department of batch 2022-23, I forged strong connections with my juniors, prioritizing mentorship and fostering a collaborative environment. Through teamwork and shared dedication, we navigated challenges, achieving collective success. Our department stands as a testament to the power of unity and mentorship, driving excellence and growth."
  },
  // You can add more student thoughts here
];

function Thoughts() {
  return (
    <div className='h-[100vh] text-white bg-zinc-900'>
      <h1 className='text-[6vh] font-semibold text-center font-[font3]'>Thoughts of Our STUDENTS</h1>
      {studentThoughts.map((student, index) => (
        <div key={index} className="max-w-sm mx-auto h-[63vh] bg-[#2A2929] mt-24 rounded-lg overflow-hidden shadow-lg m-4">
          <img
            className="w-[16vh] ml-6 mt-4 object-cover rounded-full"
            src={student.image}
            alt="Profile"
          />
          <div className="px-5 py-4">
            <div className='text-[4vh] pr-2 flex items-center justify-between'>
              <div>
                <h2 className="font-bold text-[3vh] font-[font3]">{student.name}</h2>
              </div>
              <PiStudentFill />
            </div>
            <h3 className='text-[1.8vh] ml-1 text-zinc-400 font-semibold'>{student.batch}</h3>
            <p className="text-zinc-400 text-[2.05vh] mt-4 font-[font3]">
              {student.thought}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Thoughts;