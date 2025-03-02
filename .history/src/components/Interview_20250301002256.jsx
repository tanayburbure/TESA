import React from 'react'

function Interview() {
    return (
        <div className='w-full bg-zinc-200 h-[100vh] pt-12'>
            <div className='w-[70vw]  mx-auto'>
                <h1 className='text-center tracking-tighter text-[3vw]'>Learn from Real-Life <span className='text-green-800'>INTERVEIW EXP</span> of our students</h1>
                <p className='text-center'>Expeirence the perfect blend of Culture,Technology,Athleticism at our captivating events , where innovation meets tradition in a spectacular showcase of talent and passsion join us on exhilarating journey through the reamls of Culture, Techonology and Sports</p>
                <div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
                    <div className='flex flex-col items-center'>
                        <img 
                            src="./interview/person1.jpg" 
                            alt="Interview 1"
                            className='w-64 h-64 object-cover rounded-lg'
                        />
                        <h2 className='mt-4 text-xl font-semibold text-zinc-800'>John Smith</h2>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img 
                            src="./interview/person2.jpg"
                            alt="Interview 2"
                            className='w-64 h-64 object-cover rounded-lg'
                        />
                        <h2 className='mt-4 text-xl font-semibold text-zinc-800'>Sarah Johnson</h2>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img 
                            src="./interview/person3.jpg"
                            alt="Interview 3"
                            className='w-64 h-64 object-cover rounded-lg'
                        />
                        <h2 className='mt-4 text-xl font-semibold text-zinc-800'>Mike Davis</h2>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Interview