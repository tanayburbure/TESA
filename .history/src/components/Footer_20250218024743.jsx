import React from 'react';
import { IoLogoInstagram } from 'react-icons/io5';
import { FaLinkedinIn, FaDiscord, FaMapLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { GoArrowUpRight } from "react-icons/go";

function Footer() {
  return (
    <div className="h-[75vh] lg:h-[50vh] md:h-[73vh] overflow-hidden flex flex-col">
      {/* Divider Line */}
      <div className="h-[1px] bg-zinc-700 mx-2 lg:mx-16"></div>

      <div className="py-[3vh] lg:flex lg:justify-between lg:items-center lg:px-20 flex-1">
        {/* Logo Section */}
        <div className="flex flex-col items-center text-zinc-400 font-[font15] flex-1">
          <img
            className="h-[20vw] lg:h-[10vw] mb-2 select-none transition-transform duration-300"
            src="./images/tesahalf.png"
            alt="TESA Logo"
          />
          <h3 className="text-[1.3vh] text-center">TELECOM ENGINEER'S STUDENT ASSOCIATION</h3>
          <h2 className="text-[1.5vh] text-center">WE CREATE.YOU CELEBRATE</h2>
        </div>

        {/* Socials Section */}
        <div className="flex flex-col items-center flex-1">
          <h2 className="text-zinc-400 font-[font15] text-[3vh] lg:text-[4vh] mb-8">SOCIALS</h2>
          <div className="flex gap-8 text-[5.5vw] lg:text-[1.5vw]">
            {[{
              href: "https://www.instagram.com/your-profile",
              icon: <IoLogoInstagram />,
              bg: "bg-[#FF2648]"
            }, {
              href: "https://www.linkedin.com/in/your-profile",
              icon: <FaLinkedinIn />,
              bg: "bg-blue-500"
            }, {
              href: "https://discord.com/invite/your-invite-code",
              icon: <FaDiscord />,
              bg: "bg-[#6228d7]"
            }].map((item, index) => (
              <a
                key={index}
                className="relative text-white lg:p-8 lg:border-[1px] lg:border-[#2A2929] lg:hover:scale-110 lg:rounded-full lg:bg-[#2A2929] transition-all duration-300 group overflow-hidden"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={`lg:absolute lg:-inset-1 ${item.bg} lg:translate-y-full lg:group-hover:translate-y-0 lg:transition-transform lg:duration-300`}></span>
                <span className="relative z-10">{item.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Address Section */}
        <div className="flex flex-col items-center lg:items-start flex-1">
          <h2 className="font-[font15] text-zinc-400 text-[3vh] lg:text-[4vh] mb-7">ADDRESS</h2>
          <div className="text-zinc-400 font-[font6] flex text-[2.4vh] gap-2 mb-3">
            <FaMapLocationDot className="text-[2.4vh] text-[#0D7C66]" />
            <h3 className="text-[1.5vh] lg:text-[2vh] text-center lg:text-left">
              AISSMS IOIT, <br /> Kennedy Rd, near RTO, Sangamvadi <br /> Pune, Maharashtra 411001
            </h3>
          </div>
          <div className="text-zinc-400 font-[font6] flex items-center gap-3">
            <MdEmail className="text-[2.5vh] text-[#0D7C66]" />
            <a href="mailto:entctesa@gmail.com" className="text-[1.5vh] lg:text-[2vh]">entctesa@gmail.com</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div>
        <div className="h-[1px] bg-[#2A2929] mx-8 lg:mx-16"></div>
        <div className="flex flex-col lg:flex-row justify-between items-center text-zinc-600 px-2 lg:px-16 text-[2.1vw] lg:text-[1.3vw]">
          <h3 className="text-center lg:text-left">All Rights Reserved © 2024</h3>
          <div className='text-center'>
            <h3>Designed & Developed by</h3>
            <a className="text-zinc-500 flex items-center justify-center lg:text-[2.2vh]">
              Tanay Burbure<GoArrowUpRight />
            </a>
          </div>
          <h3 className="text-center lg:text-right">WEBSITE BY TESA TECH TEAM</h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
