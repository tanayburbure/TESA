import React, { useRef, useEffect } from 'react'
import gsap from 'gsap';

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
      opacity: 0,
      repeat: Infinity,
      repeatDelay: 0.8,
      duration: 0.7,
      ease: 'power1',
    });

    // Animate spans on scroll
    gsap.to(paragraph.querySelectorAll("span"), {
      opacity: 1,
      color: "#A1A1AA",
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
    <div className='text-white h-[100vh] flex flex-col px-12 items-center justify-center'>
      <div className='flex justify-between'>
        <h1 className='text-[5.5vh] font-bold pt-2'><span className='font-medium pr-4' ref={blinkRef}>[</span> WE ARE </h1>
        <p ref={paragraphRef} className='w-[60%] text-[2.6vh] tracking-tight leading-[3.5vh] text-zinc-800'>The Telecom Engineers Student Association (TESA) has proudly upheld its legacy for many years. <br />
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
  )
}

export default Aboutus