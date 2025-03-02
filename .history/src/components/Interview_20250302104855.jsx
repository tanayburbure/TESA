import React from 'react'

function Interview() {
    return (
        <div className='w-full bg-black text-white h-[100vh] pt-12'>
            <div className='w-[70vw]  mx-auto'>
                <h1 className='text-center tracking-tighter text-[3vw]'>Learn from Real-Life <span className='text-green-800'>INTERVEIW EXP</span> of our students</h1>
                <p className='text-center'>Expeirence the perfect blend of Culture,Technology,Athleticism at our captivating events , where innovation meets tradition in a spectacular showcase of talent and passsion join us on exhilarating journey through the reamls of Culture, Techonology and Sports</p>
                <div>
                <div className='flex gap-4 mt-8'>
                    <div className='h-[20vh] w-1/3 bg-white rounded-lg flex flex-col items-center justify-center p-4'>
                        <img 
                            src="./images\favicon.png"
                            alt="Interview 1"
                            className='h-24 w-24 object-cover mb-2'
                        />
                        <h2 className='text-lg font-medium text-center'>John Smith</h2>
                    </div>

                    <div className='h-[20vh] w-1/3 bg-white rounded-lg flex flex-col items-center justify-center p-4'>
                        <img
                            src="./interview/person2.jpg" 
                            alt="Interview 2"
                            className='h-24 w-24 object-cover mb-2'
                        />
                        <h2 className='text-lg font-medium text-center'>Sarah Johnson</h2>
                    </div>

                    <div className='h-[20vh] w-1/3 bg-white rounded-lg flex flex-col items-center justify-center p-4'>
                        <img
                            src="./interview/person3.jpg"
                            alt="Interview 3" 
                            className='h-24 w-24 object-cover mb-2'
                        />
                        <h2 className='text-lg font-medium text-center'>Mike Davis</h2>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Interview