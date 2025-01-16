import React from 'react'

function home() {
  return (
    <div className='h-[100vh] text-white flex items-center justify-center'>
        <div>
            <h2 className=''>Welcome to AISSMS IOIT's</h2>
            <h1 className=''>TESA</h1>
            <h5 className=''>Presented by</h5>
            <h4 className=''>Electronics and Telecommunication Department</h4>
            <h5 className=''>where innovation meets tradition</h5>
        </div>

        <div className='pl-12'>
          <img src="public\images\tesalogo.png" alt="" />
        </div>
    </div>
  )
}

export default home