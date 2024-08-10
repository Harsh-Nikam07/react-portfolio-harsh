import React from 'react';
import harshDevProfile from "../assets/harshDevProfile.jpg";
import "../assets/css/hero.css";
import { motion } from 'framer-motion';
import { AiOutlineDownload } from "react-icons/ai";
import { HiArrowLongRight } from "react-icons/hi2";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiDribbble } from "react-icons/fi";

const iconVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
};

const iconVariantsv2 = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }
};

const onbuttonClick = () => {
    const pdfUrl = "/HarshNikamCV(10-08-2024).pdf"; // Path to the PDF file in the public folder
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "HarshNikamCV(10-08-2024).pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up the DOM
};

const Hero = () => {
    return (
        <motion.section id='Hero' className='h-screen w-full flex items-center justify-center '
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1, duration: 0.3 }}>

            <div className='heroParent flex w-full  h-full justify-center  items-center flex-col   flex-wrap'>
                <div className='heroSubSection flex items-center w-full justify-center flex-col rounded-lg p-5'>
                {/* <div className='ImgSection flex justify-start items-start shadow-sm '>
                        <img className='w-32 rounded-full  border-4 border-white'  src={harshDevProfile} alt="Harsh Dev Profile" />
                    </div> */}
                    <div className='mainHeading flex justify-center items-center flex-col text-center'>
                        {/* <span className='text-4xl font-normal bg-white rounded-lg p-2'>
                            Hi, I&apos;m <span className='font-semibold'>Harsh Nikam</span> 👋
                        </span> */}
                        <span className='text-3xl md:text-6xl font-normal bg-white rounded-lg p-2'>
                            Passionate and 
                            <span className='font-semibold bg-gradient-to-r from-purple-800 to-blue-500 bg-clip-text text-transparent'> Creative
                            </span>
                        </span>


                        <span className='text-2xl desig bg-white rounded-lg p-2'>Frontend Developer & UI / UX Designer</span>
                    </div>

                </div>

                <div className='w-fit h-fit  p-2 flex justify-center items-center flex-wrap flex-row gap-6'>
                    <motion.div
                        variants={iconVariantsv2}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.1, duration: 0.3 }}
                        className='contactBtn flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-3 text-sm rounded-lg font-normal bg-gradient-to-br from-slate-800 to-black text-white '>
                        <a href="mailto:harshnikam4536@gmail.com" >
                            Contact me here
                        </a>
                        < HiArrowLongRight/>
                    </motion.div>

                    <motion.div
                        variants={iconVariantsv2}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.2, duration: 0.3 }}
                        className='resumeBtn '>
                        <button className='flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-3 text-sm rounded-lg font-normal  bg-gradient-to-br from-slate-800 to-black text-white'
                        onClick={onbuttonClick}
                        >
                            Download CV <AiOutlineDownload /> 
                        </button>   
                    </motion.div>

                    <motion.div
                        variants={iconVariantsv2}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className='socials flex justify-center items-center gap-3  '>
                        <a href="https://github.com/Harsh-Nikam07" target='_blank' className='flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-2 text-xl rounded-full font-normal  bg-gradient-to-br from-slate-800 to-black text-white'>
                            <LuGithub/>
                        </a>
                        <a href="https://www.linkedin.com/in/harshnikam/" target='_blank' className='flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-2 text-xl rounded-full font-normal  bg-gradient-to-br from-slate-800 to-black text-white'>
                            <FaLinkedinIn/>
                        </a>
                        <a href="https://dribbble.com/Harsh_Nikam" target='_blank' className='flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-2 text-xl rounded-full font-normal  bg-gradient-to-br from-slate-800 to-black text-white'>
                            <FiDribbble />
                        </a>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
};

export default Hero;
