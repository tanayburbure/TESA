import React from 'react'

function Interview() {

    const company = ["./placed/accenture.png","./placed/bharatforge.png","./placed/hexaware.png","./placed/infosys.png","./placed/mahindra.png","./placed/tatacommu.png","./placed/tcs.png","./placed/wipro.png","./placed/zensoft.png",]

    return (
        <div className='w-full bg-black text-white pt-12'>
            <div className='w-[70vw]  mx-auto'>
                <h1 className='text-center tracking-tighter text-[3vw]'>Learn from Real-Life <span className='text-green-800'>INTERVEIW EXP</span> of our students</h1>
                <p className='text-center'>Expeirence the perfect blend of Culture,Technology,Athleticism at our captivating events , where innovation meets tradition in a spectacular showcase of talent and passsion join us on exhilarating journey through the reamls of Culture, Techonology and Sports</p>
                <div>
                    <div className='flex gap-4 mt-8 text-black'>
                        <div className='h-[20vh] w-1/3 bg-white rounded-lg flex flex-col items-center justify-center p-4'>
                            <img
                                src="./images/s1.png"
                                alt="Interview 1"
                                className='h-24 w-24 object-cover mb-2'
                            />
                            <h2 className='text-lg font-medium text-center'>500+ Students placed</h2>
                        </div>

                        <div className='h-[20vh] w-1/3 bg-white rounded-lg flex flex-col items-center justify-center p-4'>
                            <img
                                src="./images/s2.png"
                                alt="Interview 2"
                                className='h-24 w-24 object-cover mb-2'
                            />
                            <h2 className='text-lg font-medium text-center'>20+ MNC's</h2>
                        </div>

                        <div className='h-[20vh] w-1/3 bg-white rounded-lg flex flex-col items-center justify-center p-4'>
                            <img
                                src="./images/s3.png"
                                alt="Interview 3"
                                className='h-24 w-24 object-cover mb-2'
                            />
                            <h2 className='text-lg font-medium text-center'>10+ Core recruitments</h2>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center gap-4 mt-8'>
                    <button className='bg-green-800 text-white px-8 py-3 rounded-lg hover:bg-green-900 transition-colors'>
                        View Interviews
                    </button>
                    <button className='bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors'>
                        Share Experience
                    </button>
                </div>
            </div>
            <div className='company mt-12'>
                <h2 className='text-center text-[3vw]'>OUR STUDENTS PLACED IN</h2>
                <style>
                    {`
                        @keyframes scroll {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(calc(-100% - 2rem))}
                        }
                        .scroll-container {
                            animation: scroll 10s linear infinite;
                            will-change: transform;
                            backface-visibility: hidden;
                            transform: translateZ(0);
                            -webkit-font-smoothing: antialiased;
                        }
                        .scroll-container:hover {
                            animation-play-state: paused;
                        }
                        @media (prefers-reduced-motion: reduce) {
                            .scroll-container {
                                animation-duration: 9s;
                            }
                        }
                    `}
                </style>
                <div className='place overflow-hidden py-8 whitespace-nowrap'>
                    <div className='scroll-container inline-flex gap-8'>
                        {company.map((img, index) => (
                            <img 
                                key={index}
                                src={img}
                                alt={`Company ${index + 1}`}
                                className='h-20 w-auto object-contain'
                            />
                        ))}
                        {/* Duplicate images for seamless loop */}
                        {company.map((img, index) => (
                            <img 
                                key={`duplicate-${index}`}
                                src={img}
                                alt={`Company ${index + 1}`}
                                className='h-20 w-auto object-contain'
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className='exp py-20'>
                <h2>Top Interveiw Experiences</h2>
            </div>
        </div>
    )
}

export default Interview