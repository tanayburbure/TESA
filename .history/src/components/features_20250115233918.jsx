import React from 'react'

function Highlights() {
    return (
        <div className='flex flex-col items-center justify-start text-white'>
            <h1 className='text-[3vw]'>Features of our website</h1>
            <h3 className='text-center px-20 pt-4'>We have implemented highly beneficial features on our website, designed to enhance student experience and utility.</h3>
            <div className="flex gap-4 mt-8">
                <div className="h-20 w-20 bg-zinc-800 rounded-lg">
                    <img src="" alt="" />
                    <h2>Interveiw Exp</h2>
                    <p>Integrated a page showcasing interview experiences of senior students, enriching our platform with invaluable insights.</p>
                    <button>View All</button>
                </div>
                <div className="h-20 w-20 bg-zinc-800 rounded-lg">
                    <img src="" alt="" />
                    <h2>Interveiw Exp</h2>
                    <p>An annual report meticulously prepared for our association, a comprehensive overview of all activities conducted.</p>
                    <button>View All</button>
                </div>
                <div className="h-20 w-20 bg-zinc-800 rounded-lg">
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