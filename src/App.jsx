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
import Footer from './components/Footer';

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


  return (
    <div className='relative overflow-x-hidden h-full w-full parent-b text-black selection:bg-purple-500 selection:text-black'>
      <div className='bg-main fixed top-0 left-0 h-full w-full z-[-1]'>
        <div className='bg-sub absolute top-0 z-[-2] h-screen w-screen'></div>
      </div>
      

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
      <Footer/>
    </div>
  );
};

export default App;
