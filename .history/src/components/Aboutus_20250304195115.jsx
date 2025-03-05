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
    <div className='h-[100vh] relative flex'>
      <ThreeScene />
      <div className='absolute px-10 text-center flex flex-col items-center justify-center'>
        
        <div className='flex flex-col items-center mt-32'>
          
          <p ref={paragraphRef} className='w-[75%] text-[2.8vh] mt-40 tracking-tight leading-[3.7vh] text-zinc-400'>The Telecom Engineers Student Association (TESA) has proudly upheld its legacy for many years. <br />
            Established in 2012 under the Electronics and Telecommunication Engineering (ENTC) Department at AISSMS IOIT, TESA was founded under the guidance of the Principal, HOD, Chairperson(s), and faculty members. The association aims to foster maximum student participation, encouraging overall development by providing a platform to showcase talents and explore hidden potentials across various domains, including technical, cultural, and sports.
            <br />
            Each year, students from the ENTC Department, actively take part in TESA’s initiatives. A major highlight of TESA is its annual two-day flagship event, "VERITAS", meaning "TRUTH." This event is designed to promote realistic growth and skill enhancement, helping students refine their abilities while gaining hands-on experience in a dynamic environment.</p>
        </div>
        <br />

        <div className='mt-12 flex gap-16'>
          <button className="text-zinc-700 border border-zinc-400 px-6 py-3 rounded-full mx-2 hover:bg-zinc-800 transition-all hover:text-zinc-200 duration-300">
            Become a Member
          </button>
          <button className="text-zinc-700 border border-zinc-400 px-6 py-3 rounded-full mx-2 hover:bg-zinc-800 transition-all hover:text-zinc-200 duration-300">
            Check Membership
          </button>
        </div>
      </div>
    </div>
  )
}

export default Aboutus