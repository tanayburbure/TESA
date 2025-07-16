import React from 'react';
import { PiStudentFill } from "react-icons/pi";

const students = [
  {
    name: "Vaishnavi Ghatge",
    batch: "BE 23-24",
    image: "./images/vaishnavi_ghatge.jpg",
    thoughts: "As the Vice President of the department of batch 2022-23, I forged strong connections with my juniors, prioritizing mentorship and fostering a collaborative environment. Through teamwork and shared dedication, we navigated challenges, achieving collective success. Our department stands as a testament to the power of unity and mentorship, driving excellence and growth."
  },
  // You can add more students here
];

function Thoughts() {
  return (
    <div className='h-[100vh] text-white bg-zinc-900'>
      <h1 className='text-[6vh] font-semibold text-center font-[font3]'>Thoughts of Our STUDENTS</h1>
      <div className="flex flex-wrap justify-center gap-6 mt-12">
        {students.map((student, index) => (
          <div key={index} className="card max-w-md h-[75vh] bg-[#2A2929] rounded-lg overflow-hidden shadow-lg p-6"> 
            <img
              className="w-[18vh] h-[18vh] object-cover rounded-full mx-auto"
              src={student.image}
              alt={student.name}
            />
            <div className="px-5 py-4 text-center">
              <div className='text-[4vh] flex items-center justify-center gap-2'>
                <h2 className="font-bold text-[3vh] font-[font3]">{student.name}</h2>
                <PiStudentFill />
              </div>
              <h3 className='text-[2vh] text-zinc-400 font-semibold'>{student.batch}</h3>
              <p className="text-zinc-400 text-[2.2vh] mt-4 font-[font3]">
                {student.thoughts}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Thoughts;
