import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import DevProjects from "./DevProjects/DevProject1"
import UxProjects from "./UiUxProjects/UxProject1"


const Projects = () => {
  const [activeTab, setActiveTab] = useState('Front End');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const variants = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0 }
  };

  const tabContentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Front End':
        return <>


              <DevProjects/>
            
        
        </>;
      case 'UI / UX':
        return <>

            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.1 }}
            >
              <UxProjects/>
            </motion.div>
        
        </>
      case 'backend':
        return <div>Backend Projects Content</div>;
      case 'fullstack':
        return <div>Fullstack Projects Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className='h-full w-full flex items-center justify-center mt-10 bg-transparent p-5' id='Projects'>
      <motion.div
        // ref={ref}
        className='heroParent w-full md:w-3/5 lg:w-2/3 xl:w-3/5 h-fit justify-center items-center flex-col  p-5 flex-wrap   rounded-lg '
        // initial="hidden"
        // animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        
        <div className='heroSubSection w-full flex items-center  justify-center flex-col gap-5 md:flex-col'>
          <div className='mainHeading flex justify-center items-center flex-col flex-wrap '>
            <span className='text-4xl font-semibold dark:text-black'>
              Projects
            </span>
          </div>
          <div className='tabs flex flex-wrap gap-5 space-x-4 mt-4 md:mt-0 mb-5'>
            {['Front End', 'UI / UX',].map((tab, index) => (
              <motion.button
                key={tab}
                className={`tabButton ${activeTab === tab ? 'active' : ''} px-4 py-2 rounded-lg transition-colors duration-300 ${activeTab === tab ? 'bg-purple-400 text-black' : 'bg-gray-200 dark:bg-gray-700 dark:text-gray-200'}`}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
            className='w-full mt-5'
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;