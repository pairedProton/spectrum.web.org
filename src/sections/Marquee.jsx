import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const brands = [
  "MICROSOFT",
  "GOOGLE",
  "AMAZON",
  "APPLE",
  "META",
  "TESLA",
  "SAMSUNG",
  "INTEL",
  "ORACLE",
  "IBM"
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
        <div class="absolute top-0 left-0 w-[20vw] h-full bg-gradient-to-r from-emerald-950 to-transparent z-1"></div>
        <div class="absolute top-0 right-0 w-[20vw] h-full bg-gradient-to-r from-transparent to-emerald-950 z-1"></div>
      <div className="flex whitespace-nowrap">
        {[...brands, ...brands].map((brand, index) => (
          <span 
            key={index}
            ref={el => marqueeElements.current[index] = el}
            className="mx-30 text-4xl font-semibold text-white uppercase tracking-wider hover:text-[#50653e] transition-colors duration-300"
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee