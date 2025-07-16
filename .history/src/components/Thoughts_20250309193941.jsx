import React from 'react';
import { PiStudentFill } from "react-icons/pi";

const students = [
  {
    name: "Vaishnavi Ghatge",
    batch: "BE 23-24",
    image: "./images/vaishnavi_ghatge.jpg",
    thoughts:
      "As the Vice President of the department of batch 2022-23, I forged strong connections with my juniors, prioritizing mentorship and fostering a collaborative environment. Through teamwork and shared dedication, we navigated challenges, achieving collective success. Our department stands as a testament to the power of unity and mentorship, driving excellence and growth."
  },
  {
    name: "John Doe",
    batch: "BE 24-25",
    image: "./images/john_doe.jpg",
    thoughts:
      "My journey in this department has been transformative, fostering both personal and academic growth. The collaborative environment and mentorship provided by seniors have played a crucial role in shaping my skills and confidence."
  },
  {
    name: "John Doe",
    batch: "BE 24-25",
    image: "./images/john_doe.jpg",
    thoughts:
      "My journey in this department has been transformative, fostering both personal and academic growth. The collaborative environment and mentorship provided by seniors have played a crucial role in shaping my skills and confidence."
  },
  {
    name: "John Doe",
    batch: "BE 24-25",
    image: "./images/john_doe.jpg",
    thoughts:
      "My journey in this department has been transformative, fostering both personal and academic growth. The collaborative environment and mentorship provided by seniors have played a crucial role in shaping my skills and confidence."
  },
  {
    name: "John Doe",
    batch: "BE 24-25",
    image: "./images/john_doe.jpg",
    thoughts:
      "My journey in this department has been transformative, fostering both personal and academic growth. The collaborative environment and mentorship provided by seniors have played a crucial role in shaping my skills and confidence."
  }
];

function Thoughts() {
  return (
    <div className='h-[100vh] text-white bg-zinc-900'>
      <h1 className='text-[6vh] font-semibold text-center font-[font3]'>Thoughts of Our STUDENTS</h1>
      <div className='flex overflow-x-auto justify-center gap-8 mt-12'>
        {students.map((student, index) => (
          <div key={index} className="card max-w-sm h-[70vh] bg-[#2A2929] rounded-lg overflow-hidden shadow-lg pt-4 px-1"> 
            <img
              className="w-[18vh] ml-6 mt-4 object-cover rounded-full"
              src={student.image}
              alt={student.name}
            />
            <div className="px-5 py-4">
              <div className='text-[4vh] pr-2 flex items-center justify-between'>
                <h2 className="font-bold text-[3vh] font-[font3]">{student.name}</h2>
                <PiStudentFill />
              </div>
              <h3 className='text-[1.8vh]  text-zinc-400 font-semibold'>{student.batch}</h3>
              <p className="text-zinc-400 text-[2.2vh] mt-4 font-[font3]">{student.thoughts}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Thoughts;
