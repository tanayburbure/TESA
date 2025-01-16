import React from 'react';
import { IoLogoInstagram } from 'react-icons/io5';
import { FaLinkedinIn, FaDiscord, FaMapLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

function Footer() {
  return (
    <div className="h-[70vh] lg:h-[50vh] md:h-[73vh] overflow-hidden">
      {/* Divider Line */}
      <div className="h-[1px] bg-zinc-700 mx-2 lg:mx-16"></div>

      <div className=" py-[3vh] lg:flex lg:justify-between lg:items-center lg:pl-20">
        {/* Logo Section */}
        <div className="py-[5vh] flex flex-col items-center text-zinc-400 font-[font15]">
          <img
            className="h-[20vw] lg:h-[10vw] mb-2 select-none transition-transform duration-300"
            src="/images/lobo.png"
            alt="TESA Logo"
          />
          <h3 className="text-[1.3vh]">TELECOM ENGINEER'S STUDENT ASSOCIATION</h3>
          <h2 className="text-[1.5vh]">WE CREATE.YOU CELEBRATE</h2>
        </div>

        {/* Socials Section */}
        <div className="flex flex-col items-center lg:ml-12">
          <h2 className="text-zinc-400 font-[font15] text-[3vh] text-center mb-8 lg:text-[4vh]">
            SOCIALS
          </h2>
          <div className="flex gap-8 text-[5.5vw] lg:text-[1.5vw]">
            <a
              className="relative text-white lg:p-8 lg:border-[1px] lg:border-[#2A2929] lg:overflow-hidden lg:hover:scale-110 lg:rounded-full lg:bg-[#2A2929] transition-all duration-300 group"
              href="https://www.instagram.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoInstagram className="relative z-10" />
              <span className="lg:absolute lg:-inset-1 lg:bg-[#FF2648] lg:transform lg:translate-y-full lg:group-hover:translate-y-0 lg:transition-transform lg:duration-300 lg:z-0"></span>
            </a>
            <a
              className="relative text-white lg:p-8 lg:border-[1px] lg:border-[#2A2929] lg:overflow-hidden lg:hover:scale-110 lg:rounded-full lg:bg-[#2A2929] transition-all duration-300 group"
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="relative z-10" />
              <span className="lg:absolute lg:-inset-1 lg:bg-blue-500 lg:transform lg:translate-y-full lg:group-hover:translate-y-0 lg:transition-transform lg:duration-300 lg:z-0"></span>
            </a>
            <a
              className="relative text-white lg:p-8 lg:border-[1px] lg:border-[#2A2929] lg:overflow-hidden lg:hover:scale-110 lg:rounded-full lg:bg-[#2A2929] transition-all duration-300 group"
              href="https://discord.com/invite/your-invite-code"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord className="relative z-10" />
              <span className="lg:absolute lg:-inset-1 lg:bg-[#6228d7] lg:transform lg:translate-y-full lg:group-hover:translate-y-0 lg:transition-transform lg:duration-300 lg:z-0"></span>
            </a>
          </div>

        </div>

        {/* Address Section */}
        <div className="flex flex-col items-center mt-12 lg:mt-0 lg:pr-16 lg:items-start">
          <h2 className="font-[font15] text-zinc-400 text-[3vh] lg:text-[4vh] mb-7 lg:pl-16">
            ADDRESS
          </h2>
          <div className="text-zinc-400 font-[font6] flex text-[2.4vh] gap-[8px] mb-3">
            <FaMapLocationDot className="mt-[1px] text-[2.4vh]  mr-1 text-[#0D7C66]" />
            <h3 className="text-[1.5vh] lg:text-[2vh]">
              AISSMS IOIT, <br /> Kennedy Rd, near RTO, Sangamvadi
              <br /> Pune, Maharashtra 411001
            </h3>
          </div>
          <div className="text-zinc-400 font-[font6] flex items-center gap-[13px] lg:pl-[0vh] md:pl-[5vh] mr-[23vw] lg:mr-0">
            <MdEmail className="mt-1 text-[2.5vh] text-[#0D7C66]" />
            <a href="mailto:entctesa@gmail.com" className="text-[1.5vh] lg:text-[2vh]  cursor-pointer">entctesa@gmail.com</a>
          </div>
        </div>

      </div>
      {/* Footer Bottom Section */}
      <div>
        <div className="h-[1px] bg-[#2A2929] mx-8 relative bottom-3 lg:mx-16"></div>
        <div className="flex items-center justify-between font-[font1] text-[2.1vw] lg:text-[1.3vw] text-zinc-600 lg:flex-row lg:justify-between lg:items-center lg:px-16 px-2">
          <h3 className="text-center lg:text-left">All Rights Reserved © 2024</h3>

          {/* Wrap the button with an anchor tag for mailto */}
          <a href="mailto:tanayburbure@gmail.com" className="px-4 py-[0.5px] text-zinc-500 text-[1.2vh] lg:text-[1.3vw] border border-black rounded-full bg-transparent text-sm lg:text-[2.2vh] lg:text-zinc-500">
            contact developer
          </a>

          <h3 className="text-center lg:text-right">WEBSITE BY TESA TECH TEAM</h3>
        </div>
      </div>

    </div>
  );
}

export default Footer;
