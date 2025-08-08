import React, { useRef, useEffect } from 'react'
import gsap from 'gsap';
import ThreeScene from "../components/ThreeScene";

function Aboutus() {
  const paragraphRef = useRef(null);
  const blinkRef = useRef(null);

  useEffect(() => {
    const paragraph = paragraphRef.current;
    const blink = blinkRef.current;

    // Wrap each character in a span
    paragraph.innerHTML = paragraph.textContent
      .split("")
      .map((char) => `<span>${char}</span>`)
      .join("");


    // Animate spans on scroll
    gsap.to(paragraph.querySelectorAll("span"), {
      opacity: 1,
      color: "black",
      y: 0,
      stagger: 0.03,
      scrollTrigger: {
        trigger: paragraph,
        start: "top 80%",
        end: "top 00%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className='h-[100vh] relative flex bg-[#EBEBEB]'>
      <ThreeScene />
      <div className='absolute px-10 text-center flex flex-col items-center justify-center'>

        <div className='flex flex-col items-center mt-32'>

          <p ref={paragraphRef} className='w-[76%] text-[2.7vh] z-[1] mt-[27vh] tracking-tight leading-[3.7vh] text-zinc-400'>The Telecom Engineers Student Association (TESA) has proudly upheld its legacy for many years. <br />
            Established in 2012 under the Electronics and Telecommunication Engineering (ENTC) Department at AISSMS IOIT, TESA was founded under the guidance of the Principal, HOD, Chairperson(s), and faculty members. The association aims to foster maximum student participation, encouraging overall development by providing a platform to showcase talents and explore hidden potentials across various domains, including technical, cultural, and sports.
            <br />
            Each year, students from the ENTC Department, actively take part in TESA’s initiatives. A major highlight of TESA is its annual two-day flagship event, "VERITAS"</p>
        </div>
        <br />

        <div className='mt-8 flex gap-16 z-[1]'>
          <button className="relative overflow-hidden border-2 border-zinc-700 font-[font4] px-4 py-2 pt-[12px] rounded-full mx-2 text-zinc-700 transition-all duration-300 transform scale-100 hover:scale-105 hover:border-transparent hover:text-grey-900 group">
            {/* Sliding background */}
            <span className="absolute top-[-90%] left-[-15%] h-[300%] w-[300%] bg-[#3B6654] rounded-full -translate-x-full rotate-[10deg] origin-top-left transition-transform duration-200 ease-out group-hover:translate-x-0 z-[-1]"></span>
            Become a Member
          </button>
          <button className="relative overflow-hidden font-[font4] border-2 border-zinc-700 px-4 pt-[2px] rounded-full mx-2 text-zinc-700 transition-all duration-300 transform scale-100 hover:scale-105 hover:border-transparent hover:text-grey-900 group">
            {/* Sliding background */}
            <span className="absolute top-[-90%] left-[-15%] h-[300%] w-[300%] bg-[#3B6654] rounded-full -translate-x-full rotate-[10deg] origin-top-left transition-transform duration-200 ease-out group-hover:translate-x-0 z-[-1]"></span>
            Check Membership
          </button>


        </div>
      </div>
    </div>
  )
}

export default Aboutus