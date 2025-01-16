import React, { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import '../index.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Domain = () => {
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    document.querySelectorAll('.elem').forEach((elem) => {
      let image = elem.querySelector('img')
      let tl = gsap.timeline()
      let xTransform = gsap.utils.random(-100, 100)

      tl.set(
        image,
        {
          transformOrigin: `${xTransform < 0 ? 0 : '100%'}`
        },
        'start'
      )
        .to(
          image,
          {
            scale: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: image,
              start: 'top top',
              end: 'bottom top',
              scrub: true
            }
          },
          'start'
        )
        .to(elem, {
          xPercent: xTransform,
          ease: 'none',
          scrollTrigger: {
            trigger: image,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        })
    })
  })
  return (
    <div className="w-full bg-zinc-900">
      <div className="grid grid-cols-8 grid-rows-20 w-full overflow-hidden">
        <div className="elem col-span-1  " style={{ ['--r1']: 1, ['--c1']: 3 }}>
          <img src="public\images\Madhavi Shinde_.jpg" alt="img1" />
        </div>
        <div className="elem col-span-1  " style={{ ['--r1']: 1, ['--c1']: 7 }}>
          <img src="public\images\Madhavi Shinde_.jpg" alt="img1" />
        </div>
        <div className="elem col-span-1  " style={{ ['--r1']: 2, ['--c1']: 2 }}>
          <img src="public\images\Madhavi Shinde_.jpg" alt="img1" />
        </div>
        <div className="elem col-span-1  " style={{ ['--r1']: 2, ['--c1']: 6 }}>
          <img src="public\images\Madhavi Shinde_.jpg" alt="img1" />
        </div>
        <div className="elem col-span-1  " style={{ ['--r1']: 3, ['--c1']: 4 }}>
          <img src="public\images\Madhavi Shinde_.jpg" alt="img1" />
        </div>
        <div className="elem col-span-1  " style={{ ['--r1']: 3, ['--c1']: 8 }}>
          <img src="public\images\Madhavi Shinde_.jpg" alt="img1" />
        </div>
        <div className="elem col-span-1  " style={{ ['--r1']: 4, ['--c1']: 1 }}>
          <img src="public\images\Madhavi Shinde_.jpg" alt="img1" />
        </div>
        <div className="elem col-span-1  " style={{ ['--r1']: 4, ['--c1']: 4 }}>
          <img src="public\images\Madhavi Shinde_.jpg" alt="img1" />
        </div>
        <div className="elem col-span-1  " style={{ ['--r1']: 5, ['--c1']: 2 }}>
          <img src="public\images\Madhavi Shinde_.jpg" alt="img1" />
        </div>
        <div className="elem col-span-1  " style={{ ['--r1']: 5, ['--c1']: 6 }}>
          <img src="public\images\Madhavi Shinde_.jpg" alt="img1" />
        </div>
        <div className="elem col-span-1  " style={{ ['--r1']: 6, ['--c1']: 3 }}>
          <img src="public\images\Madhavi Shinde_.jpg" alt="img1" />
        </div>
        <div className="elem col-span-1  " style={{ ['--r1']: 6, ['--c1']: 7 }}>
          <img src="public\images\Madhavi Shinde_.jpg" alt="img1" />
        </div>
        <div className="elem col-span-1  " style={{ ['--r1']: 7, ['--c1']: 5 }}>
          <img src="public\images\Madhavi Shinde_.jpg" alt="img1" />
        </div>
        <div className="elem col-span-1  " style={{ ['--r1']: 7, ['--c1']: 8 }}>
          <img src="public\images\Madhavi Shinde_.jpg" alt="img1" />
        </div>
        <div className="elem col-span-1  " style={{ ['--r1']: 8, ['--c1']: 1 }}>
          <img src="public\images\Madhavi Shinde_.jpg" alt="img1" />
        </div>
        <div className="elem col-span-1  " style={{ ['--r1']: 8, ['--c1']: 4 }}>
          <img src="public\images\Madhavi Shinde_.jpg" alt="img1" />
        </div>
        <div className="elem col-span-1  " style={{ ['--r1']: 9, ['--c1']: 2 }}>
          <img src="public\images\Madhavi Shinde_.jpg" alt="img1" />
        </div>
        <div className="elem col-span-1  " style={{ ['--r1']: 9, ['--c1']: 6 }}>
          <img src="public\images\Madhavi Shinde_.jpg" alt="img1" />
        </div>
        <div className="elem col-span-1  " style={{ ['--r1']: 10, ['--c1']: 3 }}>
          <img src="public\images\Madhavi Shinde_.jpg" alt="img1" />
        </div>
        <div className="elem col-span-1  " style={{ ['--r1']: 10, ['--c1']: 7 }}>
          <img src="public\images\Madhavi Shinde_.jpg" alt="img1" />
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
        <h1 className="text-7xl font-bold mb-4">Events Organized</h1>
        <h2 className="text-5xl ">By TESA</h2>
      </div>
      <div className="w-3/4 mx-auto py-96 relative z-[999] text-center">
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem earum veritatis ea? Repellendus ut ipsum assumenda doloribus exercitationem
          necessitatibus voluptate reprehenderit possimus autem culpa accusantium ipsam, impedit eligendi saepe est consequatur repellat reiciendis. Non,
          expedita? Necessitatibus assumenda deserunt ipsam pariatur, eveniet earum quo temporibus veritatis, architecto suscipit, id quasi nostrum?
        </p>
      </div>
    </div>
  )
}

export default Domain
