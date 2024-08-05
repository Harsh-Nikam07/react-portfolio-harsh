import React from 'react'
import harshDevProfile from "../assets/harshDevProfile.jpg";
import "../assets/css/hero.css"
import { motion } from 'framer-motion';
import { AiOutlineDownload } from "react-icons/ai";
import { HiArrowLongRight } from "react-icons/hi2";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";

const iconVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  const iconVariantsv2 = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }
  };




const Hero = () => {
  return (
    <>
    <motion.section id='Hero' className='h-screen w-full flex items-center justify-center '         
    variants={iconVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.1, duration: 0.3 }}>


        <div className='heroParent flex  h-full justify-center  items-center flex-col gap-2  flex-wrap      '>

            <div className='heroSubSection flex items-center w-full justify-between flex-row flex-wrap-reverse  rounded-lg p-5 gap-10 b'>
                <div className='mainHeading flex justify-start items-start flex-col gap-5'>
                    <span className='text-4xl font-normal bg-white rounded-lg p-2'>
                        Hi, I&apos;m <span className='font-semibold'>Harsh Nikam</span> 👋
                    </span>

                   
                        <span className='text-xl desig bg-white rounded-lg p-2'>Frontend Developer & UI / UX Designer</span>
                        
                   
                </div>
                <div className='ImgSection flex justify-start items-start shadow-sm '>
                    <img className='w-32 rounded-full  border-4 border-white'  src={harshDevProfile} alt="Harsh Dev Profile" />
                </div>



            </div>

            <div


            className='w-fit h-fit  p-2 flex justify-center items-center flex-wrap flex-row gap-6'>

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
                    onClick={() => window.open('/src/assets/harshNikamCV.pdf')}
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
                    <a href="https://github.com/Harsh-Nikam07" className='flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-2 text-xl rounded-full font-normal  bg-gradient-to-br from-slate-800 to-black text-white'>
                        <LuGithub/>
                    </a>

                    <a href="https://www.linkedin.com/in/harshnikam/" className='flex justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.1)_0px_9px_30px] py-2 px-2 text-xl rounded-full font-normal  bg-gradient-to-br from-slate-800 to-black text-white'>
                        <FaLinkedinIn/>
                    </a>
                    
                </motion.div>
                
            </div>

            {/* <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-500"><div className="translate-y-0 opacity-100 transition group-hover:-translate-y-[150%] group-hover:opacity-0">Hover me</div><div className="absolute translate-y-[150%] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"><path d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z" fill="currentColor" ></path></svg></div></button> */}


          
        </div>

        

    </motion.section>

    
    </>
  )
}

export default Hero