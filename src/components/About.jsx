import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <p>{title}</p>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>OverView</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)} 
        className='mt-4 text-secondary text-[17px] max-w-2xl leading-[30px]'>
        I'm a Seneca College student who wants to major in software development. 
        I'm passionate in developing software apps and learning new technologies. 
        I have a solid background in programming languages, including Python, C++, and JavaScript. 
        React, Node.js, and Express are just a few of the front-end and back-end technologies I've worked with in the past. 
        Additionally, I have included databases like MySQL and MongoDB in my projects. 
        I'm a quick learner and want to work directly with clients to develop software solutions that solve practical issues in an effective, scalable, and user-friendly manner. 
        Together, let's make your ideas a reality.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default About