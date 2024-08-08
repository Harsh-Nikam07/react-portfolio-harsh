import React from 'react';

import { MdArrowOutward } from "react-icons/md";


import uxproject1 from "../assets/projects/uxproject1.png"
import uxproject2 from "../assets/projects/uxproject2.png"

import { motion } from 'framer-motion';

const UxProjects = () => {
  const linkVariants = {
    hover: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300
      }
    },
    initial: {
      opacity: 1,
      y: 10
    }
  };
  return (
 

    <div className='flex w-full h-full justify-center items-center flex-row flex-wrap gap-8'>
       <motion.div 
      className='w-full md:w-[34rem] h-fit flex justify-between items-center flex-row flex-wrap gap-5 bg-white rounded-3xl shadow-lg p-5'
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
            <div className='ProdImage w-full p-2 '>
        <motion.img 
          className='rounded-lg'
          src={uxproject1} 
          alt="" 
          variants={{
            rest: { rotate: 0 },
            // hover: {  translateX: -5, translateY:-5, scale:1.1, rotate:-4 }
          }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <motion.div className='ProdDetails w-full flex justify-start items-start flex-col gap-4'>
      <div className='ProdTitle h-[2.5rem] flex justify-center items-center flex-row gap-2'>
      <motion.a
        href="https://dribbble.com/shots/24643792-CICR-Insect-Resistance-Management-Application-UI-Design"
        target='_blank'
        className='w-full flex justify-start items-center flex-row flex-wrap gap-1 transition-all link group'
        variants={linkVariants}
        initial="initial"
        whileHover="hover"
      >
        <motion.span
          className='text-xl font-medium'
          variants={itemVariants}
        >
          CICR - IRM App UI Design
        </motion.span>
        
        <motion.span
          className='text-xl font-medium'
          variants={itemVariants}
        >
          <MdArrowOutward />
        </motion.span>
      </motion.a>
    </div>
        <div className='ProdDesc'>
          <span> A Field Data Collection and Reporting Application User Interface Design</span>
        </div>
        <div className='ProdTech w-full flex justify-start items-center flex-row flex-wrap gap-2'>

          <div className='skill-heroS flex justify-center items-center gap-2  py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> Figma </span>
          </div>


        </div>
      </motion.div>

    </motion.div>



    <motion.div 
      className='w-full md:w-[34rem] h-fit flex justify-between items-center flex-row flex-wrap gap-5 bg-white rounded-3xl shadow-lg p-5'
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
            <div className='ProdImage w-full p-2 '>
        <motion.img 
          className='rounded-lg'
          src={uxproject2} 
          alt="" 
          variants={{
            rest: { rotate: 0 },
            // hover: {  translateX: -5, translateY:-5, scale:1.1, rotate:-4 }
          }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <motion.div className='ProdDetails w-full flex justify-start items-start flex-col gap-4'>
      <div className='ProdTitle h-[2.5rem] flex justify-center items-center flex-row gap-2'>
      <motion.a
        href="https://dribbble.com/shots/24648906-WoodVortex-An-Ecommerce-Landing-page-Responsive-UI-Design"
        target='_blank'
        className='w-full flex justify-start items-center flex-row flex-wrap gap-1 transition-all link group'
        variants={linkVariants}
        initial="initial"
        whileHover="hover"
      >
        <motion.span
          className='text-xl font-medium'
          variants={itemVariants}
        >
          E-commerce App UI Design
        </motion.span>
        
        <motion.span
          className='text-xl font-medium'
          variants={itemVariants}
        >
          <MdArrowOutward />
        </motion.span>
      </motion.a>
    </div>
        <div className='ProdDesc'>
          <span>WoodVortex An E-commerce Application User interface responsive design </span>
        </div>
        <div className='ProdTech w-full flex justify-start items-center flex-row flex-wrap gap-2'>

          <div className='skill-heroS flex justify-center items-center gap-2  py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> Figma </span>
          </div>

          <div className='skill-heroS flex justify-center items-center gap-2  py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> Responsive Design </span>
          </div>


        </div>
      </motion.div>

    </motion.div> 





    
    </div>

    
  );
}

export default UxProjects