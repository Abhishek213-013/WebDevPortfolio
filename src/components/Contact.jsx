import React from 'react';
import { contactItems } from '../constant/data';
import { RiLinkedinBoxFill, RiGithubFill } from '@remixicon/react';
import { motion } from 'motion/react';
import { fadeIn, fadeInUp, staggerContainer } from '../motion/animation';
const Contact = () => {
  return (
    <section className="py-20" id="contact">
        <motion.div 
        variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                className="container grid gap-10 md:grid-cols-2 md:divide-x md:divide-neutral-800">
            {/* content */}
            <div>
                <motion.h2 variants={fadeInUp}>Get In Touch</motion.h2>
                <motion.p variants={fadeInUp} className="mt-3.5 mb-7">
                    Ready to work on your next project. Let's discuss how I 
                    can help bring your ideas to life.
                </motion.p>
                {/* List */}
                <motion.ul variants={fadeInUp}>
                    {contactItems.map((item) => (
                        <motion.li variants={fadeInUp} key={item.id} className="flex items-center gap-1.5">
                            <p className="text-white font-semibold">{item.label}</p>
                            <a 
                                href={item.label === "Email:" ? `mailto:${item.link}` : item.label === "Phone:" ? `tel:${item.link}` : "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                {item.link}
                            </a>

                        </motion.li>
                    ))}
                </motion.ul>

                {/* Social Profiles */}
                <motion.div variants={fadeIn} className="flex items-center gap-2 mt-6">
                    <a 
                        href="https://www.linkedin.com/in/abhishek-chowdhury-93927b278/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-neutral-300 transition-colors"
                    >
                        <RiLinkedinBoxFill size={30}/>
                    </a>

                    <a 
                        href="https://github.com/Abhishek213-013"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-neutral-300 transition-colors"
                    >
                        <RiGithubFill size={30}/>
                    </a>
                </motion.div>

            </div>
            {/* Form */}
            <motion.form 
                variants={fadeIn}
                action="https://formsubmit.co/abhishekchowdhury054@gmail.com" 
                method="POST"
                className="grid gap-5"
            >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

                {/* Name */}
                <div className="grid gap-2">
                    <label htmlFor="name">Name *</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="input"
                        required
                    />
                </div>

                {/* Email */}
                <div className="grid gap-2">
                    <label htmlFor="email">Email *</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="input"
                        required
                    />
                </div>

                {/* Message */}
                <div className="grid gap-2">
                    <label htmlFor="message">Message *</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Message"
                        className="h-40 border border-neutral-800 indent-4 py-2 resize-none"
                        required
                    />
                </div>

                        <button type="submit" className="primary-btn max-w-max">Send Message</button>
            </motion.form>

        </motion.div>
    </section>
  )
}

export default Contact