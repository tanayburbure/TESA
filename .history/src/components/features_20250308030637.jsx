import React from 'react'

function Highlights() {
    return (
        <div className='flex flex-col mt-8 bg-zinc-900 h-[70vh] items-center justify-start text-white'>
            <h1 className='text-[4vw] font-[font4] font-regular'>Features of our website</h1>
            <h3 className='text-center px-20'>Our website is equipped with highly impactful features, thoughtfully designed to enhance student experience and usability.</h3>
            <div className="flex gap-4 mt-16">
                <div className="h-[12vw] w-[18vw] px-4 mx-4 bg-zinc-800 rounded-lg text-center">
                    <img src="" alt="" />
                    <h2>Interveiw Exp</h2>
                    <p>Integrated a page showcasing interview experiences of senior students, enriching our platform with invaluable insights.</p>
                    <button>View All</button>
                </div>
                <div className="h-[12vw] w-[18vw] px-4 mx-4 bg-zinc-800 rounded-lg text-center">
                    <img src="" alt="" />
                    <h2>Interveiw Exp</h2>
                    <p>An annual report meticulously prepared for our association, a comprehensive overview of all activities conducted.</p>
                    <button>View All</button>
                </div>
                <div className="h-[12vw] w-[18vw] mx-4 px-4 bg-zinc-800 rounded-lg text-center">
                    <img src="" alt="" />
                    <h2>Interveiw Exp</h2>
                    <p>A page dedicated to promoting endeavors of our students, showcasing their innovative ventures and hustles.</p>
                    <button>View All</button>
                </div>
            </div>
        </div>
    )
}

export default Highlights