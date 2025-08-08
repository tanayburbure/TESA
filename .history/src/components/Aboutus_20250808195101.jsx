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
          <PageTransitionEvent
      containerClassName="mx-2 rounded-full border border-zinc-400"
      className="text-zinc-700 px-6 py-3 transition-all duration-300"
      as="button"
      // You can add additional props like onClick here if needed
    >
      Become a Member
    </PageTransitionEvent>

    <PageTransitionEvent
      containerClassName="mx-2 rounded-full border border-zinc-400"
      className="text-zinc-700 px-6 py-3 transition-all duration-300"
      as="button"
    >
      Check Membership
    </PageTransitionEvent>

        </div>
      </div>
    </div>
  )
}

export default Aboutus