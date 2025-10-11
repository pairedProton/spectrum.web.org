import React from 'react'
import Routing from './utils/Routing'
import { ReactLenis, useLenis } from 'lenis/react'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

const App = () => {
const lenisRef = useRef()

useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
  
    gsap.ticker.add(update)
  
    return () => gsap.ticker.remove(update)
  }, [])


  return (<>
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
    <div className='w-full h-full flex flex-col ' >
      <Routing></Routing>
    </div>
    </>
  )
}

export default App