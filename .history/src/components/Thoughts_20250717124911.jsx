import React, { useState } from 'react';
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
  }
];

function Thoughts() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStudent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % students.length);
  };

  const prevStudent = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + students.length) % students.length);
  };

  return (
    <div className="h-[100vh] flex flex-col items-center relative">
      <h1 className="text-[6vh] font-semibold text-center font-[font4]">Thoughts of Our STUDENTS</h1>

      <div className="flex flex-nowrap justify-center gap-8 mt-8">
        <div className="card max-w-sm h-[70vh] bg-[#2A2929] rounded-lg overflow-hidden shadow-lg pt-4 px-1">
          <img
            className="w-[18vh] ml-6 mt-4 object-cover rounded-full"
            src={students[currentIndex].image}
            alt={students[currentIndex].name}
          />
          <div className="px-5">
            <div className="text-[4vh] pr-2 flex items-center justify-between">
              <h2 className="font-bold text-[3vh] font-[font3]">{students[currentIndex].name}</h2>
              <PiStudentFill />
            </div>
            <h3 className="text-[1.8vh] text-zinc-400 font-semibold">{students[currentIndex].batch}</h3>
            <p className="text-zinc-400 text-[2.2vh] mt-4 font-[font3]">{students[currentIndex].thoughts}</p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between w-[300px] mt-4 z-10 relative">
        <button
          onClick={prevStudent}
          className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded cursor-pointer"
        >
          Previous
        </button>
        <button
          onClick={nextStudent}
          className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Thoughts;
