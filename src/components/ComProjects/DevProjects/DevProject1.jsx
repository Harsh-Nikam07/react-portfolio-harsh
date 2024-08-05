import React from 'react';
import { IoIosLink } from "react-icons/io";

import prodOneThumnail from "../assets/projects/personalPortfolioThumnail.png"
import { motion } from 'framer-motion';

const DevProjects = () => {
  return (
 

    <div className='flex justify-ceter items-ceter flex-row flex-wrap gap-8'>
       <motion.div 
      className='w-full h-fit flex justify-between items-center flex-row flex-wrap gap-5 bg-white rounded-3xl shadow-lg p-5'
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <div className='ProdDetails w-full md:w-1/2 flex justify-start items-start flex-col gap-4'>
        <div className='ProdTitle flex justify-center items-center flex-row gap-2'>
          <span className='text-xl font-medium'>Personal Portfolio Website</span>
          <a href="https://harshnikam-harsh-nikam07s-projects.vercel.app/" target='_blank' >
            <span className='text-xl font-medium'><IoIosLink /></span>
          </a>
        </div>
        <div className='ProdDesc'>
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil quo consectetur, iusto eius a molestias!</span>
        </div>
        <div className='ProdTech w-full flex justify-start items-center flex-row flex-wrap gap-2'>
          <div className='skill-heroS flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> HTML </span>
          </div>
          <div className='skill-heroS flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> CSS </span>
          </div>
          <div className='skill-heroS flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> JavaScript </span>
          </div>
          <div className='skill-heroS flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> Spline </span>
          </div>
          <div className='skill-heroS flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> Figma </span>
          </div>
          <div className='skill-heroS flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> Flutter </span>
          </div>
          <div className='skill-heroS flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> Dart </span>
          </div>
        </div>
      </div>
      <div className='ProdImage w-full md:w-2/5 p-2 '>
        <motion.img 
          src={prodOneThumnail} 
          alt="" 
          variants={{
            rest: { rotate: 0 },
            // hover: {  translateX: -5, translateY:-5, scale:1.1, rotate:-4 }
          }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>


    <motion.div 
      className='w-full h-fit flex justify-between items-center flex-row flex-wrap gap-5 bg-white rounded-3xl p-5 shadow-lg'
      initial="rest"
      whileHover="hover"
      animate="rest"
    >

    <div className='ProdImage w-full md:w-2/5 p-2 '>
            <motion.img 
              src={prodOneThumnail} 
              alt="" 
              variants={{
                rest: { rotate: 0 },
                // hover: {  translateX: -5, translateY:-5, scale:1.1, rotate:4 }
              }}
              transition={{ duration: 0.5 }}
            />
          </div>
      <div className='ProdDetails w-full md:w-1/2 flex justify-start items-start flex-col gap-4'>
        <div className='ProdTitle flex justify-center items-center flex-row gap-2'>
          <span className='text-xl font-medium'>Personal Portfolio Website</span>
          <a href="https://harsh-nikam07.github.io/EDUWEB-E-learning-website/" target='_blank' >
            <span className='text-xl font-medium'><IoIosLink /></span>
          </a>
        </div>
        <div className='ProdDesc'>
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil quo consectetur, iusto eius a molestias!</span>
        </div>
        <div className='ProdTech w-full flex justify-start items-center flex-row flex-wrap gap-2'>
          <div className='skill-heroS flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> HTML </span>
          </div>
          <div className='skill-heroS flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> CSS </span>
          </div>
          <div className='skill-heroS flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> JavaScript </span>
          </div>
          <div className='skill-heroS flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> Spline </span>
          </div>
          <div className='skill-heroS flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> Figma </span>
          </div>
          <div className='skill-heroS flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> Flutter </span>
          </div>
          <div className='skill-heroS flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> Dart </span>
          </div>
        </div>
      </div>

    </motion.div>

    <motion.div 
      className='w-full h-fit flex justify-between items-center flex-row flex-wrap gap-5 bg-white rounded-3xl p-5 shadow-lg'
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <div className='ProdDetails w-full md:w-1/2 flex justify-start items-start flex-col gap-4'>
        <div className='ProdTitle flex justify-center items-center flex-row gap-2'>
          <span className='text-xl font-medium'>Personal Portfolio Website</span>
          <a href="#" >
            <span className='text-xl font-medium'><IoIosLink /></span>
          </a>
        </div>
        <div className='ProdDesc'>
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil quo consectetur, iusto eius a molestias!</span>
        </div>
        <div className='ProdTech w-full flex justify-start items-center flex-row flex-wrap gap-2'>
          <div className='skill-heroS flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> HTML </span>
          </div>
          <div className='skill-heroS flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> CSS </span>
          </div>
          <div className='skill-heroS flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> JavaScript </span>
          </div>
          <div className='skill-heroS flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> Spline </span>
          </div>
          <div className='skill-heroS flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> Figma </span>
          </div>
          <div className='skill-heroS flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> Flutter </span>
          </div>
          <div className='skill-heroS flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> Dart </span>
          </div>
        </div>
      </div>
      <div className='ProdImage w-full md:w-2/5 p-2 '>
        <motion.img 
          src={prodOneThumnail} 
          alt="" 
          variants={{
            rest: { rotate: 0 },
            // hover: {  translateX: -5, translateY:-5, scale:1.1, rotate:-4 }
          }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
    
    </div>

    
  );
}

export default DevProjects;
