import React from 'react'

function Thoughts() {
  return (
    <div>
      <div className="max-w-sm mx-auto bg-[#2A2929] rounded-lg overflow-hidden shadow-lg m-4">
        <img 
          className="w-[15vh]  object-cover rounded-full"
          src="\images\vaishnavi_ghatge.jpg"
          alt="Profile"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl text-white mb-2">John Doe</div>
          <p className="text-zinc-400 text-base">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>
        </div>
      </div>
    </div>
  )
}

export default Thoughts