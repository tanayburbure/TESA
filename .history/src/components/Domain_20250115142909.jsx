import { useEffect } from "react"
import React from 'react'
import Lenis from "lenis"

const Events = () => {

    useEffect(() => {
        const lenis = new Lenis()

        lenis.on('scroll', (e) => {
            console.log(e)
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    })
    return (
        <div className='w-full h-[300vh]'>Events</div>
    )
}

export default Events