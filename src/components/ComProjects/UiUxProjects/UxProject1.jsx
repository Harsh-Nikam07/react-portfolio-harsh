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

  const projects = [
    {
      href: "https://dribbble.com/shots/24643792-CICR-Insect-Resistance-Management-Application-UI-Design",
      thumbnail: uxproject1,
      title: "CICR - IRM App UI Design",
      description: "A Field Data Collection and Reporting Application User Interface Design",
      tech: ["Figma"]
    },
    {
      href: "https://dribbble.com/shots/24648906-WoodVortex-An-Ecommerce-Landing-page-Responsive-UI-Design",
      thumbnail: uxproject2,
      title: " E-commerce App UI Design",
      description: "WoodVortex An E-commerce Application User interface responsive design ",
      tech: ["Figma", "Responsive Deisgn"]
    },

  ];
  return (
    <div className='w-full h-full flex justify-center items-center flex-row flex-wrap gap-8'>
      {
        projects.map((project, index) =>{
          
          return (
            <>
             
              <motion.a 
                key={index}
                href={project.href}
                target='_blank'
                className='w-full md:w-[34rem] h-fit flex justify-between items-center flex-row flex-wrap gap-5 bg-black p-5 border border-black text-white hover:border hover:border-[#C000FF] rounded-3xl transition-all duration-1200 ease-out'
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
        
              <div className='ProdImage w-full  p-2 '>
                  <motion.img 
                  className='rounded-lg'
                    src={project.thumbnail} 
                    alt={project.title} 
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
                href={project.href}
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
                  {project.title}
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
                  <span className='text-sm'>{project.description}</span>
                </div>
                <div className='ProdTech w-full flex justify-start items-center flex-row flex-wrap gap-2'>
                  {
                    project.tech.map((tech, techIndex) => {
                      return(
                        <div key={techIndex} className='skill-heroS skill-heroS flex justify-center items-center gap-2 py-1 px-3 text-base rounded-full font-normal text-white border-2 border-[#C000FF] hover:bg-[#C000FF]'>
                          <span className='text-sm'>{tech}</span>
                        </div>
                      );
                    })
                  }
                </div>
              </div>
        
          </motion.a>
             
            
            </>
        
          );
        })
      }
  </div>
 

    
  );
}

export default UxProjects