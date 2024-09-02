import React, { useEffect, useRef, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Exp from './components/Exp';
import Contact from './components/Contact';
import Dock from './components/Dock';
import Projects from './components/ComProjects/Projects';
import Skills from './components/Skills';
import Lenis from 'lenis';
import Spline from '@splinetool/react-spline';
import './assets/css/main.css';

const Separator = () => <div className="w-2 h-full bg-black"></div>;

const App = () => {
  const lenis = new Lenis();

  lenis.on('scroll', (e) => {
    // console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // const cursorRef = useRef(null);
  // const mousePosition = useRef({ x: 0, y: 0 });

  // useEffect(() => {
  //   const updateMousePosition = (e) => {
  //     mousePosition.current = { x: e.clientX, y: e.clientY };
  //   };

  //   window.addEventListener('mousemove', updateMousePosition);

  //   return () => {
  //     window.removeEventListener('mousemove', updateMousePosition);
  //   };
  // }, []);

  //   const [isMobile, setIsMobile] = useState(false);
  //   useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768);
  //   };

  //   handleResize();
  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, [])

  // useEffect(() => {
  //   const moveCursor = () => {
  //     if (cursorRef.current) {
  //       cursorRef.current.style.transform = `translate3d(${mousePosition.current.x - 8}px, ${mousePosition.current.y - 8}px, 0)`;
  //     }
  //     requestAnimationFrame(moveCursor);
  //   };

  //   moveCursor();
  // }, []);

  return (
    <div className='relative overflow-x-hidden h-full w-full parent-bg text-black selection:bg-purple-500 selection:text-black'>
      {/* <div className='fixed top-0 left-0 h-full w-full z-[-1]'>
        {!isMobile && (<Spline scene="https://prod.spline.design/8H0x2wNUtaUYA9WO/scene.splinecode" />)}
        <div className="relative h-full w-full bg-white"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div></div>
      </div> */}

      {/* {!isMobile && (<div className='cursor' ref={cursorRef}></div>)} */}

      

      <div className='container mx-auto px-8'>
        <Dock />
      </div>
      <Hero />
      <Separator />
      <About />
      <Separator />
      <Skills />
      <Separator />
      <Projects />
      <Separator />
      <Exp />
    </div>
  );
};

export default App;
