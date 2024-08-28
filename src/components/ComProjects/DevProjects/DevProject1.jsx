import React from 'react';
import { IoIosLink } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";

import prodOneThumnail from "../assets/projects/project-1.jpg"  //portfolio
import projectTwoThumnail from "../assets/projects/project-2.jpg"  //eduweb
import projectThreeThumnail from "../assets/projects/project-3.jpg" //e-comm
import projectFourThumnail from "../assets/projects/project-4.jpg"  //Sumz

import { motion } from 'framer-motion';


const DevProjects = () => {

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
 

    <div className='w-full h-full flex justify-center items-center flex-row flex-wrap gap-8'>


<motion.a 
        href="https://articlesummarizer-npe9xyr3j-harsh-nikam07s-projects.vercel.app/"
        target='_blank'
        className='w-full md:w-[34rem] h-fit flex justify-between items-center flex-row flex-wrap gap-5 bg-white rounded-3xl shadow-lg p-5'
        initial="rest"
        whileHover="hover"
        animate="rest"
    >
            <div className='ProdImage w-full p-2 '>
        <motion.img 
          className='rounded-lg'
          src={projectFourThumnail} 
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
        href="https://articlesummarizer-npe9xyr3j-harsh-nikam07s-projects.vercel.app/"
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
          Sumz - AI Article Summarizer
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
          <span>An Article Summarizer which summarizes long articles using OpenAI GPT-4 Model and Redux Toolkit</span>
        </div>
        <div className='ProdTech w-full flex justify-start items-center flex-row flex-wrap gap-2'>

          <div className='skill-heroS flex justify-center items-center gap-2  py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> React </span>
          </div>

          <div className='skill-heroS flex justify-center items-center gap-2  py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> Vite </span>
          </div>

          <div className='skill-heroS flex justify-center items-center gap-2  py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> Tailwind Css </span>
          </div>

          <div className='skill-heroS flex justify-center items-center gap-2  py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> Redux Tool Kit </span>
          </div>

          <div className='skill-heroS flex justify-center items-center gap-2  py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> Rapid API </span>
          </div>

        </div>
      </motion.div>

    </motion.a>






       <motion.a 
        href="https://harshnikam-harsh-nikam07s-projects.vercel.app/"
        target='_blank'
        className='w-full md:w-[34rem] h-fit flex justify-between items-center flex-row flex-wrap gap-5 bg-white rounded-3xl shadow-lg p-5'
        initial="rest"
        whileHover="hover"
        animate="rest"
    >
            <div className='ProdImage w-full p-2 '>
        <motion.img 
          className='rounded-lg'
          src={prodOneThumnail} 
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
        href="https://harshnikam-harsh-nikam07s-projects.vercel.app/"
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
          Personal Portfolio Website
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
          <span>Designed and developed this project to showcase my Skills and Projects with and clean and Modern UI</span>
        </div>
        <div className='ProdTech w-full flex justify-start items-center flex-row flex-wrap gap-2'>

          <div className='skill-heroS flex justify-center items-center gap-2  py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> React </span>
          </div>

          <div className='skill-heroS flex justify-center items-center gap-2  py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> Vite </span>
          </div>

          <div className='skill-heroS flex justify-center items-center gap-2  py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> Tailwind Css </span>
          </div>

          <div className='skill-heroS flex justify-center items-center gap-2  py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> Framer Motion </span>
          </div>

          <div className='skill-heroS flex justify-center items-center gap-2  py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> Spline </span>
          </div>

        </div>
      </motion.div>

    </motion.a>




    <motion.a 
      href="https://vibetara.com/"
      target='_blank'
      className='w-full md:w-[34rem] h-fit flex justify-between items-center flex-row flex-wrap gap-5 bg-white rounded-3xl p-5 shadow-lg'
      initial="rest"
      whileHover="hover"
      animate="rest"
    >

    <div className='ProdImage w-full  p-2 '>
            <motion.img 
            className='rounded-lg'
              src={projectThreeThumnail} 
              alt="" 
              variants={{
                rest: { rotate: 0 },
                // hover: {  translateX: -5, translateY:-5, scale:1.1, rotate:4 }
              }}
              transition={{ duration: 0.5 }}
            />
          </div>
      <div className='ProdDetails w-full flex justify-start items-start flex-col gap-4'>
      <div className='ProdTitle h-[2.5rem] flex justify-center items-center flex-row gap-2'>
      <motion.a
        href="https://vibetara.com/"
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
          E-commerce Application UI
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
          <span>Crafted Engaging and Interactive user interfaces using 3D Models to display Featured products</span>
        </div>
        <div className='ProdTech w-full flex justify-start items-center flex-row flex-wrap gap-2'>
          <div className='skill-heroS flex justify-center items-center gap-2  py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> HTML </span>
          </div>
          <div className='skill-heroS flex justify-center items-center gap-2  py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> CSS </span>
          </div>
          <div className='skill-heroS flex justify-center items-center gap-2  py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> JavaScript </span>
          </div>
          <div className='skill-heroS flex justify-center items-center gap-2  py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> Spline </span>
          </div>
        </div>
      </div>

    </motion.a>

    <motion.a 
      href="https://harsh-nikam07.github.io/EDUWEB-E-learning-website/"
      target='_blank'
      className='w-full md:w-[34rem] h-fit flex justify-between items-center flex-row flex-wrap gap-5 bg-white rounded-3xl p-5 shadow-lg'
      initial="rest"
      whileHover="hover"
      animate="rest"
    >

    <div className='ProdImage w-full  p-2 '>
            <motion.img 
            className='rounded-lg'
              src={projectTwoThumnail} 
              alt="" 
              variants={{
                rest: { rotate: 0 },
                // hover: {  translateX: -5, translateY:-5, scale:1.1, rotate:4 }
              }}
              transition={{ duration: 0.5 }}
            />
          </div>
      <div className='ProdDetails w-full flex justify-start items-start flex-col gap-4'>
      <div className='ProdTitle h-[2.5rem] flex justify-center items-center flex-row gap-2'>
      <motion.a
        href="https://harsh-nikam07.github.io/EDUWEB-E-learning-website/"
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
          Educational Website UI
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
          <span>Designed and Developed An Educational Website Landing page which Showcases their Courses and Team members.</span>
        </div>
        <div className='ProdTech w-full flex justify-start items-center flex-row flex-wrap gap-2'>
          <div className='skill-heroS flex justify-center items-center gap-2  py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> HTML </span>
          </div>
          <div className='skill-heroS flex justify-center items-center gap-2  py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> CSS </span>
          </div>
          <div className='skill-heroS flex justify-center items-center gap-2  py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> JavaScript </span>
          </div>

        </div>
      </div>

    </motion.a>


{/* 
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
          <div className='skill-heroS flex justify-center items-center gap-2  py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> HTML </span>
          </div>
          <div className='skill-heroS flex justify-center items-center gap-2  py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> CSS </span>
          </div>
          <div className='skill-heroS flex justify-center items-center gap-2  py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> JavaScript </span>
          </div>
          <div className='skill-heroS flex justify-center items-center gap-2  py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> Spline </span>
          </div>
          <div className='skill-heroS flex justify-center items-center gap-2  py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> Figma </span>
          </div>
          <div className='skill-heroS flex justify-center items-center gap-2  py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
            <span> Flutter </span>
          </div>
          <div className='skill-heroS flex justify-center items-center gap-2  py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'>
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
    </motion.div> */}
    
    </div>

    
  );
}

export default DevProjects;
