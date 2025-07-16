import React from 'react'
import { IoIosPeople } from "react-icons/io";

function Highlights() {
    return (
        <div className='flex flex-col mt-8 bg-zinc-900 h-[80vh] items-center justify-start text-white'>
            <h1 className='text-[3.8vw] font-[font4] tracking-wide font-semibold'>Features of our website</h1>
            <h3 className='text-center text-[2.4vh] font-[font3]'>Our website is equipped with highly impactful features, thoughtfully designed to enhance student experience and usability.</h3>
            <div className="flex gap-4 mt-24">
                <div className="h-[12vw] w-[18vw] px-4 mx-4 bg-[#EBEBEB] text-zinc-800 rounded-lg text-center">
                <IoIosPeople />
                    <h2>INTERVIEW EXPERIENCE</h2>
                    <p>Integrated a page showcasing interview experiences of senior students, enriching our platform with invaluable insights.</p>
                    <button>View page</button>
                </div>
                <div className="h-[12vw] w-[18vw] px-4 mx-4 bg-[#EBEBEB] text-zinc-800 rounded-lg text-center">
                    <img src="" alt="" />
                    <h2>TESA REPORT</h2>
                    <p>An annual report meticulously prepared for our association, a comprehensive overview of all activities conducted.</p>
                    <button>View page</button>
                </div>
                <div className="h-[12vw] w-[18vw] mx-4 px-4 bg-[#EBEBEB] text-zinc-800 rounded-lg text-center">
                    <img src="" alt="" />
                    <h2>STARTUP PAGE</h2>
                    <p>A page dedicated to promoting endeavors of our students, showcasing their innovative ventures and hustles.</p>
                    <button>View page</button>
                </div>
            </div>
        </div>
    )
}

export default Highlights