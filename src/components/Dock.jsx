import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaHome, FaPen, FaGithub, FaLinkedin, FaTimes, FaEnvelope, FaSun, FaBars } from 'react-icons/fa';
// import devLogo from "../assets/harshDevLogoBlack.png";
import { LiaTimesSolid } from "react-icons/lia";
import harshDevProfile from "../assets/harshDevAboutBg.png";


const iconVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

const Separator = () => (
  <div className="w-px h-6 bg-[#6200ee]"></div>
);

const Dock = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <motion.div
        className="h-[3rem] fixed right-6 top-10 transform -translate-x-1/2 bg-[#6200ee] shadow-lg rounded-full px-4 py-2 flex items-center justify-between space-x-2 z-50 md:hidden  "
        transition={{ duration: 0.3 }}
      >
        
        <motion.div
          className="text-xl text-black transform transition-transform duration-300 hover:scale-125  cursor-pointer"
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
          className="fixed top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center space-y-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
         
          <motion.div
            className="text-xl text-white transform transition-transform duration-300 hover:scale-125  cursor-pointer"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1, duration: 0.1 }}
          >
            <Link to='Hero' spy={true} smooth={true} offset={0} duration={1000} onClick={toggleMenu}>Home</Link>
          </motion.div>

          <Separator/>
         
          <motion.div
            className="text-xl text-white transform transition-transform duration-300 hover:scale-125  cursor-pointer"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2, duration: 0.2 }}
          >
            <Link to='About' spy={true} smooth={true} offset={0} duration={1000} onClick={toggleMenu}>About</Link>
          </motion.div>

          <Separator/>


          <motion.div
            className="text-xl text-white transform transition-transform duration-300 hover:scale-125  cursor-pointer"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <Link to='skills' spy={true} smooth={true} offset={0} duration={1000} onClick={toggleMenu}>Skills</Link>
          </motion.div>

          <Separator/>

          <motion.div
            className="text-xl text-white transform transition-transform duration-300 hover:scale-125  cursor-pointer"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link to='Projects' spy={true} smooth={true} offset={0} duration={1000} onClick={toggleMenu}>Projects</Link>
          </motion.div>


          <Separator/>
          <motion.div
            className="text-xl text-white transform transition-transform duration-300 hover:scale-125  cursor-pointer"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <Link to='Exp' spy={true} smooth={true} offset={0} duration={1000} onClick={toggleMenu}>Work Experience</Link>
          </motion.div>



{/* 
          <Separator/> */}

          {/* <motion.div
            className="text-xl text-black transform transition-transform duration-300 hover:scale-125  cursor-pointer"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link to='Contact' spy={true} smooth={true} offset={0} duration={1000} onClick={toggleMenu}>Contact</Link>
          </motion.div> */}

          <Separator/>
         

          <motion.a
            className="text-xl text-white transform transition-transform duration-300 hover:scale-125  cursor-pointer"
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
        className="h-[4rem] fixed top-6 left-1/2 transform -translate-x-1/2 shadow-md  rounded-2xl px-4 py-6 items-center justify-between space-x-2 gap-5 z-50 hidden md:flex  bg-black"
        transition={{ duration: 0.3 }}
      >


        {/* <motion.div
          className="text-xl text-black transform transition-transform duration-300 hover:scale-125  cursor-pointer"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          <Link to='Hero' spy={true} smooth={true} offset={-100} duration={500}><div className=' w-12 h-12  rounded-full flex items-center justify-center '><img src={harshDevProfile} alt="Harsh Nikam" className='h-full w-full contain-content rounded-full' /></div></Link>
        </motion.div> */}


        <motion.div
          className="text-xl text-black transform transition-transform duration-300 hover:scale-125  cursor-pointer"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <Link to='Hero' spy={true} smooth={true} offset={-100} duration={500}><div className=' py-2 px-3 rounded-full flex items-center justify-centert text-white text-base hover:text-[#6200ee] transition-all duration-200 ease-out '><span className='text-base '>Home</span></div></Link>
        </motion.div>
       
        <motion.div
          className="text-xl text-black transform duration-300 hover:scale-125  cursor-pointer transition-all"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <Link to='About' spy={true} smooth={true} offset={0} duration={1000}><div className=' py-2 px-3 rounded-full flex items-center justify-centert text-white text-base hover:text-[#6200ee] transition-all duration-200 ease-out'><span className='text-base '>About</span></div></Link>
        </motion.div>


        <motion.div
          className="text-xl text-black transform duration-300 hover:scale-125  cursor-pointer transition-all"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4, duration: 0.3 }}
        >
          <Link to='skills' spy={true} smooth={true} offset={0} duration={1000}><div className=' py-2 px-3 rounded-full flex items-center justify-centert text-white text-base hover:text-[#6200ee] transition-all duration-200 ease-out'><span className='text-base '>Skills</span></div></Link>
        </motion.div>
       


        <motion.div
          className="text-xl text-black transform duration-300 hover:scale-125  cursor-pointer transition-all"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          <Link to='Projects' spy={true} smooth={true} offset={-100} duration={1000}><div className='py-2 px-3 rounded-full flex items-center justify-centert text-white text-base hover:text-[#6200ee] transition-all duration-200 ease-out'><span className='text-base '>Projects</span></div></Link>
        </motion.div>

        <motion.div
          className="text-xl text-black transform duration-300 hover:scale-125  cursor-pointer transition-all w-40"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6, duration: 0.3 }}
        >
          <Link to='Exp' spy={true} smooth={true} offset={-100} duration={1000} className='w-fit'><div className='w-full py-2 px-3 rounded-full flex items-center justify-centert text-white text-base hover:text-[#6200ee] transition-all duration-200 ease-out'>Work Experience</div></Link>
        </motion.div>


        {/* <motion.div
          className="text-xl text-black transform duration-300 hover:scale-125  cursor-pointer transition-all w-40"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6, duration: 0.3 }}
        >
          <Link to='Exp' spy={true} smooth={true} offset={-100} duration={1000} className='w-fit'><div className='w-full py-2 px-3 rounded-full flex items-center justify-centert text-white text-base hover:text-[#6200ee] transition-all duration-200 ease-out'>Work Experience</div></Link>
        </motion.div> */}



        {/* <motion.div
          className="text-xl text-black transform duration-300 hover:scale-125  cursor-pointer transition-all"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7, duration: 0.3 }}
        >
          <a href="https://github.com/Harsh-Nikam07" target='_blank'>
            <div className="relative group">
            <div className="w-10 h-10 border-2 border-[#6200ee] flex justify-center items-center rounded-full hover:bg-[#6200ee]">
              <TbBrandGithubFilled className="text-white" />
            </div>
            <div className="absolute top-16 w-fit mb-2 left-5 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded py-1 px-2 pointer-events-none transition-opacity duration-300">
              Github
            </div>
          </div>
          </a>
        </motion.div>



        
        <motion.div
          className="text-xl text-black transform duration-300 hover:scale-125  cursor-pointer transition-all"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7, duration: 0.3 }}
        >
          <a href="https://github.com/Harsh-Nikam07" target='_blank'>
            <div className="relative group">
            <div className="w-8 h-8 border-2 border-[#6200ee] flex justify-center items-center rounded-full hover:bg-[#6200ee]">
              <FaLinkedinIn className="text-white w-4 h-4" />
            </div>
            <div className="absolute top-16 w-fit mb-2 left-5 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded py-1 px-2 pointer-events-none transition-opacity duration-300">
              Libkedin
            </div>
          </div>
          </a>
        </motion.div>




        
        <motion.div
          className="text-xl text-black transform duration-300 hover:scale-125  cursor-pointer transition-all"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7, duration: 0.3 }}
        >
          <a href="https://github.com/Harsh-Nikam07" target='_blank'>
            <div className="relative group">
            <div className="w-8 h-8 border-2 border-[#6200ee] flex justify-center items-center rounded-full hover:bg-[#6200ee]">
              <FaDribbble className="text-white w-4 h-4" />
            </div>
            <div className="absolute top-16 w-fit mb-2 left-5 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded py-1 px-2 pointer-events-none transition-opacity duration-300">
              Dribbble
            </div>
          </div>
          </a>
        </motion.div> */}

      </motion.div>
    </div>
  );
}

export default Dock;
