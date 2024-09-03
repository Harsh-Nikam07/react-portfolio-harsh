import React from 'react'

const Exp = () => {
  return (
    <>
      <div className='h-full flex items-center justify-center mt-10 bg-transparent flex-wrap flex-col ' id='Exp'>
        <div className='heroParent flex w-full h-fit justify-center items-center flex-col gap-10 p-5 flex-wrap rounded-lg'>
          <div className='heroSubSection flex items-center w-full justify-between flex-col'>
            <div className='mainHeading flex justify-start items-start '>
              <span className='md:text-4xl text-2xl text-white font-semibold'>
                Work Experience
              </span>
            </div>
          </div>

          <div className='expParent w-full h-fit flex justify-center items-center flex-wrap flex-col gap-12'>
            <div className='w-full md:w-3/5 p-3 flex justify-center items-center flex-col flex-grow gap-0 bg-black text-white border border-black hover:border hover:border-[#C000FF] rounded-lg transition-all duration-1200 ease-out'>
              <div className='w-full text-lg font-medium p-2'>
                <span className=''>Front end Web Developer</span>
              </div>

              <div className='w-full text-base flex justify-between items-center flex-row flex-wrap p-2 gap-2'>
                <div className='companyName'>
                  Zappkode Solutions
                </div>
                <div className='companyName'>
                  Jan 2024 - Present
                </div>
              </div>

              <div className='desc p-2 flex justify-start items-center w-full '>
                <ul className='list-disc pl-5 text-sm gap-2 flex justify-start items-start flex-col'>
                  <li><span className='font-medium mr-2'>Enhanced User Interfaces: </span>Improved the visual design and usability of existing web applications.</li>
                  <li><span className=''>Project: <a className='text-blue-600 underline' href="https://vibetara.com/" target='_blank'>Vibetara:</a>  </span>Enhanced the user interface and developed new features.</li>
                  <li><span className=''>Project: Kohinoor Book Management Admin Software:</span>Developed the user interface for the Kohinoor Book Management Admin software, ensuring a seamless and intuitive experience for administrators.</li>
                  <li><span className=''>Simultaneous Project Management:</span>Successfully managed and maintained Vibetara while simultaneously developing an ERP application.</li>
                </ul>
              </div>

              <div className='skills w-full p-2 flex justify-start items-center flex-row flex-wrap gap-2'>
                <div className='flex justify-center items-center gap-2 py-1 px-3 text-xs rounded-full font-normal text-white border-2 border-[#C000FF] hover:bg-[#C000FF] '>
                  <span> HTML </span>
                </div>
                <div className='flex justify-center items-center gap-2 py-1 px-3 text-xs rounded-full font-normal text-white border-2 border-[#C000FF] hover:bg-[#C000FF]'>
                  <span> CSS </span>
                </div>
                <div className='flex justify-center items-center gap-2 py-1 px-3 text-xs rounded-full font-normal text-white border-2 border-[#C000FF] hover:bg-[#C000FF]'>
                  <span> JavaScript </span>
                </div>
                <div className='flex justify-center items-center gap-2 py-1 px-3 text-xs rounded-full font-normal text-white border-2 border-[#C000FF] hover:bg-[#C000FF]'>
                  <span> Spline </span>
                </div>
                <div className='flex justify-center items-center gap-2 py-1 px-3 text-xs rounded-full font-normal text-white border-2 border-[#C000FF] hover:bg-[#C000FF]'>
                  <span> Figma </span>
                </div>
                <div className='flex justify-center items-center gap-2 py-1 px-3 text-xs rounded-full font-normal text-white border-2 border-[#C000FF] hover:bg-[#C000FF]'>
                  <span> Flutter </span>
                </div>
                <div className='flex justify-center items-center gap-2 py-1 px-3 text-xs rounded-full font-normal text-white border-2 border-[#C000FF] hover:bg-[#C000FF]'>
                  <span> Dart </span>
                </div>
              </div>
            </div>

            <div className='w-full md:w-3/5 p-3 flex justify-center items-center flex-col flex-grow gap-0 bg-black text-white border border-black hover:border hover:border-[#C000FF] rounded-lg transition-all duration-1200 ease-out'>
              <div className='w-full text-lg font-medium p-2'>
                <span className=''>Front end developer Intern</span>
              </div>

              <div className='w-full text-base flex justify-between items-center flex-row flex-wrap p-2'>
                <div className='companyName'>
                  Kaliba Enterprises Pvt Ltd
                </div>
                <div className='companyName'>
                  Jul 2023 - Aug 2023
                </div>
              </div>

              <div className='desc p-2 flex justify-start items-center w-full'>
                <ul className='list-disc pl-5 text-sm gap-2 flex justify-start items-start flex-col'>
                  <li>Developed responsive web pages using HTML, CSS, and Bootstrap.</li>
                  <li>Contributed to UI design and prototyping with Figma.</li>
                  <li>Implemented responsive design techniques for better mobile usability.</li>
                </ul>
              </div>

              <div className='skills w-full p-2 flex justify-start items-center flex-row flex-wrap gap-2'>
                <div className='flex justify-center items-center gap-2 py-1 px-3 text-xs rounded-full font-normal text-white border-2 border-[#C000FF] hover:bg-[#C000FF]'>
                  <span> HTML </span>
                </div>
                <div className='flex justify-center items-center gap-2 py-1 px-3 text-xs rounded-full font-normal text-white border-2 border-[#C000FF] hover:bg-[#C000FF]'>
                  <span> CSS </span>
                </div>
                <div className='flex justify-center items-center gap-2 py-1 px-3 text-xs rounded-full font-normal text-white border-2 border-[#C000FF] hover:bg-[#C000FF]'>
                  <span> Bootstrap </span>
                </div>
                <div className='flex justify-center items-center gap-2 py-1 px-3 text-xs rounded-full font-normal text-white border-2 border-[#C000FF] hover:bg-[#C000FF]'>
                  <span> Responsive Design  </span>
                </div>
                <div className='flex justify-center items-center gap-2 py-1 px-3 text-xs rounded-full font-normal text-white border-2 border-[#C000FF] hover:bg-[#C000FF]'>
                  <span> Figma </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Exp
