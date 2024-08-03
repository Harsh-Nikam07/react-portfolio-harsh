import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
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
    <div className='h-screen flex items-center justify-center bg-transparent' id='skills'>
      <motion.div
        ref={ref}
        className='heroParent flex h-fit justify-center items-center flex-col gap-10 p-5 flex-wrap rounded-lg'
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        
        
      >
        <div className='heroSubSection flex items-center w-full justify-center flex-row'>
          <div className='mainHeading flex justify-center items-center'>
            <span className='text-4xl font-semibold'>Skills</span>
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


            {/* <motion.div
              variants={skillVariants}
              className='skill-heroS flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-3 text-base rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white'
            >
              <span> Lenis </span>
            </motion.div> */}


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
      </motion.div>
    </div>
  );
};

export default Skills;
