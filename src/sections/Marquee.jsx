import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import falcon from '../assets/imageslide/falcon.png'
import ffm from '../assets/imageslide/ffm.png'
import hdfc from '../assets/imageslide/hdfc.png'
import hyper from '../assets/imageslide/hdfc.png'
import idfc from '../assets/imageslide/idfc.png'
import kubota from '../assets/imageslide/kubota.png'
import mani from '../assets/imageslide/mani.png'
import marut from '../assets/imageslide/marut.png'
import vioq from '../assets/imageslide/vioq.png'

const brands = [
  falcon,
  ffm,
  hdfc,
  hyper,
  idfc,
  kubota,
  mani,
  marut,
  vioq,
];

const Marquee = () => {
  const marqueeRef = useRef(null);
  const marqueeElements = useRef([]);

  useEffect(() => {
    const marqueeItems = marqueeElements.current;
    const totalWidth = marqueeItems.reduce((acc, item) => acc + item.offsetWidth, 0);
    
    gsap.to(marqueeItems, {
      x: `-=${totalWidth / 2}`,
      duration: 20,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % (totalWidth / 2))
      }
    });
  }, []);

  return (
    <div className="w-full bg-emerald-950 py-10 overflow-hidden relative font-[curvyText]  " ref={marqueeRef}>
        <div className="absolute top-0 left-0 w-[20vw] h-full bg-gradient-to-r from-emerald-950 to-transparent z-1"></div>
        <div className="absolute top-0 right-0 w-[20vw] h-full bg-gradient-to-r from-transparent to-emerald-950 z-1"></div>
      <div className="flex whitespace-nowrap">
        {[...brands, ...brands].map((brand, index) => (
          <span 
            key={index}
            ref={el => marqueeElements.current[index] = el}
            className="mx-12 px-8" // Changed from mx-30 which is invalid in Tailwind
          >
            <img 
              src={brand} 
              className="w-40 h-auto object-contain relative z-100 " // Changed from w-50 to specific dimensions
              alt={`Brand logo ${index + 1}`} 
            />
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee