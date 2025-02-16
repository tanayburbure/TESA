import React from 'react'

function Aboutus() {
  return (
    <div className='text-white h-[100vh] px-24 pt-32'>
      <div className='flex justify-between'>
        <h1 className='text-[6vh] font-bold'>WE ARE</h1>
        <p className='w-[80%] text-[2.3vh]'>TESA (Telecom Engineers Student Association) has been carrying on its legacy for many years.
          <br />
          Telecom Engineer Students Association was first established in the year 2012 under the Electronics and Telecommunication Engineering Department (ENTC), AISSMS IOIT. This committee was established under the guidance of respective Principal sir, department HOD, TESA chairperson(s) and other faculty members for the maximum participation, overall development of students which involved showcasing their talent and providing them a platform to reveal their hidden potentials and skills through various domains like Technical, Cultural and Sports. Like every year students from Electronics and Telecommunication Department and also from other departments and AISSMS Society.
          <br />

          TESA Events were generally held for two days under the brand event name “VERITAS” which means “TRUTH” where the committee basically looked after the realistic development of the students in uplifting their talent.</p>
      </div>
      <br />

      <div>
        <button className="bg-zinc-800 text-white px-4 py-2 rounded-lg mx-2 hover:bg-zinc-700 transition-all duration-300">
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