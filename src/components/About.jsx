import React from 'react'
import { aboutItems } from '../constant/data'
import { motion } from 'motion/react';
import { fadeIn, fadeInUp, staggerContainer } from '../motion/animation';

const About = () => {
  return (
    <section className="section bg-secondary-clr" id="about">
        <motion.div 
        variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="container">
            <motion.h2 variants={fadeInUp}>About me</motion.h2>

            <motion.p variants={fadeInUp} className="mt-3 mb-9">
                I'm a frontend developer with a passion of building scalable 
                web applications. I specialize in React, JavaScript, and modern 
                CSS frameworks to deliver high-performance solutions. My expertise 
                includes component architecture, state management, API integration, 
                and responsive design. I focus on writing maintainable code and creating 
                accessible user experiences.
            </motion.p>

            {/* Skills */}
            <div>
                <motion.p variants={fadeInUp} className="text-white font-semibold text-xl mb-3">Skills:</motion.p>
                <motion.ul variants={fadeInUp} className="">
                    {aboutItems.map((item) => (
                        <li key={item.id}>
                            <p>✔️ {item.label}</p>
                        </li>
                    ))}
                </motion.ul>
            </div>
        </motion.div>
    </section>
  )
}

export default About