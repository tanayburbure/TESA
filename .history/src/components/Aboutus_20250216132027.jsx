import React from 'react'

function Aboutus() {
  return (
    <div className='text-white h-[100vh] flex flex-col px-12 items-center justify-center'>
      <div className='flex justify-between'>
        <h1 className='text-[5.5vh] font-bold'>WE ARE |</h1>
        <p className='w-[60%] text-[2.6vh] tracking-tight leading-[3.5vh] text-zinc-800'>The Telecom Engineers Student Association (TESA) has proudly upheld its legacy for many years. <br />
        Established in 2012 under the Electronics and Telecommunication Engineering (ENTC) Department at AISSMS IOIT, TESA was founded under the guidance of the Principal, HOD, Chairperson(s), and faculty members. The association aims to foster maximum student participation, encouraging overall development by providing a platform to showcase talents and explore hidden potentials across various domains, including technical, cultural, and sports.
        <br />
          Each year, students from the ENTC Department, actively take part in TESA’s initiatives. A major highlight of TESA is its annual two-day flagship event, "VERITAS", meaning "TRUTH." This event is designed to promote realistic growth and skill enhancement, helping students refine their abilities while gaining hands-on experience in a dynamic environment.</p>
      </div>
      <br />

      <div>
        <button className=" bg-zinc-800 text-white px-4 py-2 rounded-lg mx-2 hover:bg-zinc-700 transition-all duration-300">
          Learn More
        </button>
        <button className="bg-zinc-800 text-white px-4 py-2 rounded-lg mx-2 hover:bg-zinc-700 transition-all duration-300">
          Contact Us
        </button>
      </div>


    </div>
  )
}

export default Aboutus