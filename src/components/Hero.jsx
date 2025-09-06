import React from 'react';
import { heroIcons } from '../constant/data';
import { BackgroundGradient } from './ui/BackgroundGradient';
import Button from './Button';
import { motion } from 'motion/react';
import { fadeIn, fadeInUp, staggerContainer } from '../motion/animation';

const Hero = () => {
  return (
    <section className="py-28 lg:pt-40" id="home">
        <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="container flex flex-col items-center">

            {/* image */}
            <motion.div variants={fadeIn}>
            <BackgroundGradient className="w-70 h-70 lg:w-80 lg:h-80
            rounded-full bg-zinc-900">
                <figure className="rounded-full overflow-hidden">
                    <img src="/images/hero-img.jpg" alt="Abhishek Chowdhury" width={452} height={452} />
                </figure>
            </BackgroundGradient>
            </motion.div>
            {/* content */}
            <div className="text-center mt-8">
                <motion.h1 variants={fadeInUp} className="text-3xl lg:text-5xl mb-1.5 font-bold">Hi,I'm Abhishek Chowdhury.</motion.h1>
                <motion.h2 variants={fadeInUp}>Frontend Developer</motion.h2>
                <motion.p variants={fadeInUp} className="max-w[820px] mx-auto mt-4 mb-6">
                    I'm Abhishek Chowdhury, a frontend developer who 
                    architects seamless digital experiences through 
                    innovative code and intuitive design. With expertise 
                    in cutting-edge technologies and a passion for performance 
                    optimization, I transform complex business requirements 
                    into scalable, user-centric applications that drive meaningful 
                    engagement.
                </motion.p>

                <motion.div variants={fadeIn} className="flex items-center justify-center gap-5">
                    {heroIcons.map((icon) => (
                        <a
                            key={icon.id}
                            href={icon.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-indigo-400 transition-colors"
                        >
                            <icon.icon size={30} />
                        </a>
                    ))}
                </motion.div>


                { /* btn wrapper */}
                <motion.div variants={fadeInUp} className="mt-10 flex items-center justify-center flex-wrap gap-5">
                    <a href="/Abhishek_Chowdhury_CV.pdf" download>
                        <Button label="Download CV" classes="primary-btn" icon />
                    </a>
  
                    <a href="mailto:abhishekchowdhury054@gmail.com">
                        <Button label="Let's Collaborate" classes="secondary-btn" />
                    </a>
                </motion.div>

            </div>
        </motion.div>
    </section>
  )
}

export default Hero