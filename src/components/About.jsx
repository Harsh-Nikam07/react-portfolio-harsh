import React from 'react'
import harshDevAboutImg from "../assets/harshDevAboutBg.png"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {

    const [ref, inView] = useInView({
        triggerOnce: true, // Animation triggers only once
        threshold: 0.1 // Trigger when 10% of the component is in view
      });
    
      const containerVariants = {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1 // Stagger children with 0.2 seconds delay
          }
        }
      };
    
      const skillVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      };
  return (
    <>
    
    <div className='h-screen w-full  flex items-center flex-col justify-center mt-10 bg-transparent p-5 ' id='About'>


        <div className='heroParent    h-fit  flex justify-between items-center flex-row flex-wrap p-5  gap-10   rounded-lg'>


        <div className='heroSubSection w-full md:w-3/5 flex md:justify-start justify-center :mditems-start items-center flex-col flex-wrap  md:gap-10 gap-5 '>
                <div className='mainHeading flex justify-start items-ceter '>
                    <span className='md:text-4xl text-2xl font-semibold text-white'>
                        About me
                    </span>
                </div>
                <div className='devDesc w-full flex justify-center items-center text-justify'>
                <span className='leading-8 text-white'>
                I&apos;m Harsh Nikam, a <span className='border-b-2 font-medium border-purple-500 '>Frontend Developer</span> and <span className='border-b-2 font-medium border-purple-500 ' >UI/UX Designer</span> dedicated to crafting intuitive and engaging web applications. With strong expertise in<span className='bg-[#C000FF] p-[0.2rem] px-[1rem] rounded-full mr-1 ml-1 font-medium'>Developing and Designing Cutting Edge Web Solutions</span> I excel in solving complex problems with clean, efficient code and innovative design solutions.
                </span>
            </div>

        </div>

        <div className='AboutImg w-full md:w-1/3 flex justify-center items-center overflow-hidden rounded-lg'>
            <img className='w-56 rounded-lg hover:scale-105 overflow-hidden transition-all' src={harshDevAboutImg} alt="" />
        </div>

        </div>
{/* 
        <motion.div
        ref={ref}
        className='heroParent flex h-fit justify-center items-center flex-col gap-5 p-5 flex-wrap rounded-lg md:mt-0 mt-10'
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        
        
      >
        <div className='heroSubSection flex w-full md:justify-start justify-center :mditems-start items-center flex-row'>
          <div className='mainHeading flex justify-start items-center'>
            <span className='md:text-4xl text-2xl font-semibold text-white'>Tech Stack i use</span>
          </div>
        </div>

        <div className='devDesc w-full flex justify-start items-start text-justify'>
          <motion.div
            className='skills w-[30rem] flex justify-center items-center flex-1 flex-row flex-wrap gap-2'
            variants={containerVariants}
          >
            <motion.div
              variants={skillVariants}
              className='skill-heroS flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-3 text-base rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'
            >
              <span> HTML </span>
              
            </motion.div>

            <motion.div
              variants={skillVariants}
              className='skill-heroS flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-3 text-base rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'
            >
              <span> CSS </span>
            </motion.div>

            <motion.div
              variants={skillVariants}
              className='skill-heroS flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-3 text-base rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'
            >
              <span> JavaScript </span>
            </motion.div>

            <motion.div
              variants={skillVariants}
              className='skill-heroS flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-3 text-base rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'
            >
              <span> React </span>
            </motion.div>

            <motion.div
              variants={skillVariants}
              className='skill-heroS flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-3 text-base rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'
            >
              <span> Tailwind </span>
            </motion.div>


            <motion.div
              variants={skillVariants}
              className='skill-heroS flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-3 text-base rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'
            >
              <span> Framer Motion </span>
            </motion.div>


            <motion.div
              variants={skillVariants}
              className='skill-heroS flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-3 text-base rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'
            >
              <span> Bootstrap </span>
            </motion.div>




            <motion.div
              variants={skillVariants}
              className='skill-heroS flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-3 text-base rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'
            >
              <span> Spline </span>
            </motion.div>


            <motion.div
              variants={skillVariants}
              className='skill-heroS flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-3 text-base rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'
            >
              <span> Reponsive Design </span>
            </motion.div>


            <motion.div
              variants={skillVariants}
              className='skill-heroS flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-3 text-base rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'
            >
              <span> Figma </span>
            </motion.div>


            <motion.div
              variants={skillVariants}
              className='skill-heroS flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-3 text-base rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'
            >
              <span> Wire Framing </span>
            </motion.div>

            <motion.div
              variants={skillVariants}
              className='skill-heroS flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-3 text-base rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'
            >
              <span> Flutter </span>
            </motion.div>


            <motion.div
              variants={skillVariants}
              className='skill-heroS flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-3 text-base rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'
            >
              <span> Dart </span>
            </motion.div>

            
            

          </motion.div>
        </div>
      </motion.div> */}


        <div>

        </div>

    </div>
    </>
  )
}

export default About