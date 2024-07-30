import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaHome, FaPen, FaGithub, FaLinkedin, FaTimes, FaEnvelope, FaSun, FaBars } from 'react-icons/fa';
// import devLogo from "../assets/harshDevLogoBlack.png";
import { LiaTimesSolid } from "react-icons/lia";

const iconVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

const Separator = () => (
  <div className="w-px h-6 bg-gray-300"></div>
);

const Dock = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <motion.div
        className="h-[3rem] fixed right-6 top-10 transform -translate-x-1/2 bg-white shadow-lg rounded-full px-4 py-2 flex items-center justify-between space-x-2 z-50 md:hidden  "
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="text-xl text-black transform transition-transform duration-300 hover:scale-125 hover:text-blue-500 cursor-pointer"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1, duration: 0.3 }}
          onClick={toggleMenu}
        >
          <FaBars />
        </motion.div>
      </motion.div>

      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center space-y-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* <motion.div
            className="text-xl text-black transform transition-transform duration-300 hover:scale-125 hover:text-blue-500 cursor-pointer"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <Link to='Hero' spy={true} smooth={true} offset={-100} duration={500} onClick={toggleMenu}><FaHome /></Link>
          </motion.div>

          <Separator/> */}
         
          <motion.div
            className="text-xl text-black transform transition-transform duration-300 hover:scale-125 hover:text-blue-500 cursor-pointer"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1, duration: 0.1 }}
          >
            <Link to='Hero' spy={true} smooth={true} offset={0} duration={1000} onClick={toggleMenu}>Home</Link>
          </motion.div>

          <Separator/>
         
          <motion.div
            className="text-xl text-black transform transition-transform duration-300 hover:scale-125 hover:text-blue-500 cursor-pointer"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2, duration: 0.2 }}
          >
            <Link to='About' spy={true} smooth={true} offset={0} duration={1000} onClick={toggleMenu}>About</Link>
          </motion.div>

          <Separator/>


          <motion.div
            className="text-xl text-black transform transition-transform duration-300 hover:scale-125 hover:text-blue-500 cursor-pointer"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <Link to='skills' spy={true} smooth={true} offset={0} duration={1000} onClick={toggleMenu}>Skills</Link>
          </motion.div>

          <Separator/>


          <motion.div
            className="text-xl text-black transform transition-transform duration-300 hover:scale-125 hover:text-blue-500 cursor-pointer"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <Link to='Exp' spy={true} smooth={true} offset={0} duration={1000} onClick={toggleMenu}>Work Experience</Link>
          </motion.div>

          <Separator/>


          <motion.div
            className="text-xl text-black transform transition-transform duration-300 hover:scale-125 hover:text-blue-500 cursor-pointer"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link to='Projects' spy={true} smooth={true} offset={0} duration={1000} onClick={toggleMenu}>Projects</Link>
          </motion.div>

          <Separator/>

          <motion.div
            className="text-xl text-black transform transition-transform duration-300 hover:scale-125 hover:text-blue-500 cursor-pointer"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link to='Contact' spy={true} smooth={true} offset={0} duration={1000} onClick={toggleMenu}>Contact</Link>
          </motion.div>

          <Separator/>
         

          <motion.a
            className="text-xl text-black transform transition-transform duration-300 hover:scale-125 hover:text-blue-500 cursor-pointer"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            {/* <FaTimes onClick={toggleMenu} /> */}
            <LiaTimesSolid onClick={toggleMenu}/>
            
          </motion.a>
        </motion.div>
      )}



      <motion.div
        className="h-[3.5rem] fixed top-6 left-1/2 transform -translate-x-1/2 shadow-md  rounded-2xl px-4 py-2 items-center justify-between space-x-2 gap-5 z-50 hidden md:flex  bg-white "
        transition={{ duration: 0.3 }}
      >





        <motion.div
          className="text-xl text-black transform transition-transform duration-300 hover:scale-125 hover:text-blue-500 cursor-pointer"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          <Link to='Hero' spy={true} smooth={true} offset={-100} duration={500}><div className=' py-1 px-2  text-black rounded-lg flex items-center justify-center hover:bg-purple-200  transition-all '><span className='text-base'>Home</span></div></Link>
        </motion.div>
       
        <motion.div
          className="text-xl text-black transform duration-300 hover:scale-125 hover:text-blue-500 cursor-pointer transition-all"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <Link to='About' spy={true} smooth={true} offset={0} duration={1000}><div className=' py-1 px-2  text-black rounded-lg  flex items-center justify-center hover:bg-purple-200  transition-all'><span className='text-base text-black'>About</span></div></Link>
        </motion.div>


        <motion.div
          className="text-xl text-black transform duration-300 hover:scale-125 hover:text-blue-500 cursor-pointer transition-all"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <Link to='skills' spy={true} smooth={true} offset={0} duration={1000}><div className=' py-1 px-2  text-black rounded-lg  flex items-center justify-center hover:bg-purple-200  transition-all'><span className='text-base text-black'>Skills</span></div></Link>
        </motion.div>
       
        <motion.div
          className="text-xl text-black transform duration-300 hover:scale-125 hover:text-blue-500 cursor-pointer transition-all"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4, duration: 0.3 }}
        >
          <Link to='Exp' spy={true} smooth={true} offset={-100} duration={1000}><div className='py-1 px-2  text-black rounded-lg flex items-center justify-center hover:bg-purple-200  transition-all'><span className='text-base text-black'>Work Experience</span></div></Link>
        </motion.div>

        <motion.div
          className="text-xl text-black transform duration-300 hover:scale-125 hover:text-blue-500 cursor-pointer transition-all"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          <Link to='Projects' spy={true} smooth={true} offset={-100} duration={1000}><div className='py-1 px-2  text-black rounded-lg flex items-center justify-center hover:bg-purple-200  transition-all'><span className='text-base text-black'>Projects</span></div></Link>
        </motion.div>

        <motion.div
          className="text-xl text-black transform duration-300 hover:scale-125 hover:text-blue-500 cursor-pointer transition-all"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6, duration: 0.3 }}
        >
          <Link to='Contact' spy={true} smooth={true} offset={0} duration={1000}><div className='py-1 px-2  text-black rounded-lg flex items-center justify-center hover:bg-purple-200  transition-all'><span className='text-base text-black'>Contact</span></div></Link>
        </motion.div>

      </motion.div>
    </div>
  );
}

export default Dock;
