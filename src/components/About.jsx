import React from 'react'
import harshDevAboutImg from "../assets/harshDevAboutBg.png"

const About = () => {
  return (
    <>
    
    <div className='h-screen w-full  flex items-center justify-center mt-10 bg-transparent p-5 bg-white' id='About'>


        <div className='heroParent    h-fit  flex justify-between items-center flex-row flex-wrap p-5  gap-10   rounded-lg'>


        <div className='heroSubSection w-full md:w-3/5 flex justify-start items-start flex-col flex-wrap  gap-10  '>
                <div className='mainHeading flex justify-center items-ceter '>
                    <span className='text-4xl font-semibold'>
                        About me
                    </span>
                </div>
                <div className='devDesc w-full flex justify-center items-center text-justify'>
                <span className='leading-8'>
                I&apos;m Harsh Nikam, a <span className='border-b-2 font-medium border-purple-500 '>Frontend Developer</span> and <span className='border-b-2 font-medium border-purple-500 ' >UI/UX Designer</span> dedicated to crafting intuitive and engaging web applications. With strong expertise in<span className='bg-purple-200 p-[0.2rem] px-[1rem] rounded-full mr-1 ml-1 font-medium'>Developing and Designing Cutting Edge Web Solutions</span> I excel in solving complex problems with clean, efficient code and innovative design solutions.
                </span>
            </div>

        </div>

        <div className='AboutImg w-full md:w-1/3 flex justify-center items-center overflow-hidden rounded-lg'>
            <img className='w-56 rounded-lg hover:scale-105 overflow-hidden transition-all' src={harshDevAboutImg} alt="" />
        </div>



          
        </div>

    </div>
    </>
  )
}

export default About