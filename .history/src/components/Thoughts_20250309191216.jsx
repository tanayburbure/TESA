import React from 'react'

function Thoughts() {
  return (
    <div className=' h-[100vh] text-white  bg-zinc-900'> 
    <h1 className='text-[6vh] font-medium text-center font-[font2]'>Thoughts of Our STUDENTS</h1>
      <div className="max-w-sm mx-auto h-[63vh] bg-[#2A2929] mt-24 rounded-lg overflow-hidden shadow-lg m-4">
        <img 
          className="w-[16vh] ml-6 mt-4 object-cover rounded-full"
          src=".\images\vaishnavi_ghatge.jpg"
          alt="Profile"
        />
        <div className="px-5 py-4">
          <h2 className="font-bold text-[3vh] font-[font3]">Vaishnavi Ghatge</h2>
          <h3 className='text-[1.8vh] ml-1 text-zinc-400 font-semibold'>BE 23-24</h3>
          <p className="text-zinc-400 text-[2.05vh] mt-4 font-[font3]">
          As the Vice President of the department of batch 2022-23, I forged strong connections with my juniors, prioritizing mentorship and fostering a collaborative environment. Through teamwork and shared dedication, we navigated challenges, achieving collective success. Our department stands as a testament to the power of unity and mentorship, driving excellence and growth.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Thoughts