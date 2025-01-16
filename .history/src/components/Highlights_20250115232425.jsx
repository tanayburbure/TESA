import React from 'react'

function Highlights() {
    return (
        <div className='flex flex-col items-center justify-start text-white'>
            <h1 className='text-[3vw]'>Our Event Highlights</h1>
            <h3 className='text-center px-20 pt-4'>Expeirence the perfect blend of Culture,Technology,Athleticism at our captivating events , where innovation meets tradition in a spectacular showcase of talent and passsion join us on exhilarating journey through the reamls of Culture, Techonology and Sports.</h3>
            <div className="flex gap-4 mt-8">
                <div className="h-20 w-20 bg-zinc-800 rounded-lg">
                    <button>View All</button>
                </div>
                <div className="h-20 w-20 bg-zinc-800 rounded-lg">
                    <button>View All</button>
                </div>
                <div className="h-20 w-20 bg-zinc-800 rounded-lg">
                    <button>View All</button>
                </div>
            </div>
        </div>
    )
}

export default Highlights