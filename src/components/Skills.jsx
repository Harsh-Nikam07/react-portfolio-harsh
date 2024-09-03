import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  // Array of skills
  const skills = [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JavaScript' },
    { name: 'React' },
    { name: 'Redux'},
    { name: 'Tailwind' },
    { name: 'Framer Motion' },
    { name: 'Bootstrap' },
    { name: 'Spline' },
    { name: 'Responsive Design' },
    { name: 'Figma' },
    { name: 'Wire Framing' },
    { name: 'Prototyping' },
    { name: 'User Flows' },

  ];

  return (
    <div className='h-screen  flex justify-center items-center bg-transparent' id='skills'>
      <motion.div
        ref={ref}
        className='heroParent flex h-fit justify-center items-center flex-col gap-10 p-5 flex-wrap rounded-lg'
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className='heroSubSection flex items-center w-full justify-center flex-row'>
          <div className='mainHeading flex justify-center items-center'>
            <span className='md:text-4xl text-2xl font-semibold text-white'>Skills & Tech Stack</span>
          </div>
        </div>

        <div className='devDesc w-full flex justify-start items-start text-justify'>
          <motion.div
            className='skills w-[30rem] flex justify-center items-center flex-1 flex-row flex-wrap gap-3'
            variants={containerVariants}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={skillVariants}
                className='skill-heroS flex justify-center items-center gap-2 py-1 px-3 text-base rounded-full font-normal text-white border-2 border-[#C000FF] hover:bg-[#C000FF] '
              >
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
