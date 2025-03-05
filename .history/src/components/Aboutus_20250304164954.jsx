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

    // Blink animation for the span inside h1
    gsap.to(blink, {
      opacity: 0.1,
      repeat: Infinity,
      repeatDelay: 0.7,
      duration: 0.7,
      ease: 'power0',
      yoyo: true,
    });

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
        <h2 className="text-[2.5vw] font-bold text-zinc-800 text-center relative top-0 cursor-pointer">WE CREATE. YOU CELEBRATE.</h2>
        <div className='flex flex-col items-center mt-20'>
          <h1 className='text-[5.5vh] hidden font-bold pt-2 '><span className='font-medium pr-4 mb-2' ref={blinkRef}>[</span> WE ARE </h1>
          <p ref={paragraphRef} className='w-[80%] text-[2.7vh] pr-8 tracking-tight leading-[3.5vh] text-zinc-400'>The Telecom Engineers Student Association (TESA) has proudly upheld its legacy for many years. <br />
            Established in 2012 under the Electronics and Telecommunication Engineering (ENTC) Department at AISSMS IOIT, TESA was founded under the guidance of the Principal, HOD, Chairperson(s), and faculty members. The association aims to foster maximum student participation, encouraging overall development by providing a platform to showcase talents and explore hidden potentials across various domains, including technical, cultural, and sports.
            <br />
            Each year, students from the ENTC Department, actively take part in TESA’s initiatives. A major highlight of TESA is its annual two-day flagship event, "VERITAS", meaning "TRUTH." This event is designed to promote realistic growth and skill enhancement, helping students refine their abilities while gaining hands-on experience in a dynamic environment.</p>
        </div>
        <br />

        <div>
          <button className=" bg-zinc-800 text-white px-4 py-2 rounded-lg mx-2 hover:bg-zinc-700 transition-all duration-300">
            Become a Member
          </button>
          <button className="bg-zinc-800 text-white px-4 py-2 rounded-lg mx-2 hover:bg-zinc-700 transition-all duration-300">
            Check Membership
          </button>
        </div>
      </div>
    </div>
  )
}

export default Aboutus