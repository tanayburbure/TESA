import React from 'react'
import { IoIosPeople } from "react-icons/io";
import { TbReportAnalytics } from "react-icons/tb";
import { BsRocketTakeoffFill } from "react-icons/bs";

function Highlights() {
    return (
        <div className='flex flex-col mt-8 bg-zinc-900 h-[80vh] items-center justify-start text-white'>
            <h1 className='text-[3.8vw] font-[font4] tracking-wide font-semibold'>Features of our website</h1>
            <h3 className='text-center text-[2.5vh] font-[font2]'>Our website is equipped with highly impactful features, thoughtfully designed to enhance student experience and usability.</h3>
            <div className="flex gap-4 mt-24">
                <div className="h-[12.5vw] w-[18.5vw] px-4 mx-4 bg-[#FFFFFF] text-zinc-800 rounded-lg text-center">
                    <div className='text-[3.5vh] flex items-center gap-1 justify-center pt-3'>
                        <h2 className='text-[2.4vh] font-semibold'>INTERVIEW EXPERIENCE</h2>
                        <IoIosPeople />
                    </div>
                    <p className='text-[2.2vh] leading-[2.7vh] pt-3'>Integrated a page showcasing interview experiences of senior students, enriching our platform with invaluable insights.</p>
                    <button className='border border-zinc-700 rounded-full px-5 text-center pb-1 mt-3'>View page</button>
                </div>
                <div className="h-[12.5vw] w-[18.5vw] px-4 mx-4 bg-[#FFFFFF] text-zinc-800 rounded-lg text-center">
                    <div className='text-[3.5vh] flex items-center gap-1 justify-center pt-3'>
                        <h2 className='text-[2.4vh] font-semibold'>TESA REPORT</h2>
                        <TbReportAnalytics />
                    </div>
                    <p className='text-[2.2vh] leading-[2.7vh] pt-3' >An annual report meticulously prepared for our association, a comprehensive overview of all activities conducted.</p>
                    <button className='border border-zinc-700 rounded-full px-5 text-center pb-1 mt-3'>View page</button>
                </div>
                <div className="h-[12.5vw] w-[18.5vw] mx-4 px-4 bg-[#FFFFFF] text-zinc-800 rounded-lg text-center">
                    <div className='text-[3.2vh] flex items-center gap-[0.8vh] justify-center pt-3'>
                        <h2 className='text-[2.4vh] font-semibold'>STARTUP PAGE</h2>
                        <BsRocketTakeoffFill />
                    </div>
                    <p className='text-[2.2vh] leading-[2.7vh] pt-3'>A page dedicated to promoting endeavors of our students, showcasing their innovative ventures and hustles.</p>
                    <button className='border border-zinc-700 rounded-full px-5 text-center pb-1 mt-3'>View page</button>
                </div>
            </div>
        </div>
    )
}

export default Highlights