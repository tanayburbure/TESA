import React from 'react'

function Thoughts() {
  return (
    <div className=' h-[100vh] text-white  bg-zinc-900'> 
    <h1 className='text-[6vh] font-medium text-center'>Thoughts of Our STUDENTS</h1>
      <div className="max-w-sm mx-auto h-[50vh] bg-[#2A2929] mt-32 rounded-lg overflow-hidden shadow-lg m-4">
        <img 
          className="w-[16vh] ml-6 mt-4 object-cover rounded-full"
          src=".\images\vaishnavi_ghatge.jpg"
          alt="Profile"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Vaishnavi Ghatge</div>
          <h3>BE 23-24</h3>
          <p className="text-zinc-400 text-base">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>
        </div>
      </div>
    </div>
  )
}

export default Thoughts