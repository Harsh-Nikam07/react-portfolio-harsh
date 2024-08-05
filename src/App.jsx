import React, { useState, useEffect } from 'react';
// import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Exp from './components/Exp';
import Contact from './components/Contact';

import Dock from './components/Dock';
import Projects from './components/ComProjects/Projects'
import Skills from './components/Skills';
import AnimatedCursor from "react-animated-cursor"
import Lenis from 'lenis'
import Spline from '@splinetool/react-spline';

const Separator = () => (
  <div className="w-2 h-full bg-black"></div>
);

const App = () => {
  const lenis = new Lenis();

  lenis.on('scroll', (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='relative overflow-x-hidden h-full w-full text-black selection:bg-purple-500 selection:text-white'>
      <div className='fixed top-0 left-0 h-full w-full z-[-1]'>
        {/* <div className="relative h-full w-full bg-white"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div></div>
        <div className="absolute top-0 -z-10 h-full w-full bg-white">
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
        </div> */}
        {/* <div className="relative h-full w-full bg-black"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div></div> */}
      </div>
      {!isMobile && (
        <AnimatedCursor
          innerSize={12}
          outerSize={30}
          color='0,0,0'
          outerAlpha={0.20}
          innerScale={0.8}
          outerScale={3}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
        />
      )}
      <div className='container mx-auto px-8'>
        {/* <Navbar /> */}
        <Dock />
      </div>
      <Hero />
      <Separator />
      <About />
      <Separator />
      <Skills />
      <Separator />
      <Exp />
      <Separator />
      <Projects />
    </div>
  );
}

export default App;

