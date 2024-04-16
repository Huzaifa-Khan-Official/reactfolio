import React from 'react'
import bannerImg2 from '../assets/bannerImg2.svg'
import homeDivImg from '../assets/homeDivImg.png'
import htmlIcon from '../assets/htmlIcon.png'
import jsonIcon from '../assets/jsonIcon.png'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { name, resume } from '../Constants/Constants'

export default function HomeDiv() {
    return (
        <>
            <motion.img
                src={bannerImg2}
                alt=""
                className='homeImg'
                initial={{ opacity: 0, x: 75 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            />
            <div className="row px-4 py-5">
                <div className="col-lg-6 col-md-12 col-12 d-flex flex-column justify-content-center align-items-center">
                    <div className="bubble2"></div>
                    <div className="bubble1"></div>
                    <div className="bubble3"></div>
                    <div className="bubble4"></div>
                    <div className="bubble5"></div>
                    <motion.h2
                        initial={{ opacity: 0, x: -75 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        Hey there!
                        <br />
                        I'm {name}
                        <br />
                        <span>
                            <TypeAnimation
                                sequence={[
                                    'freelancer',
                                    2000,
                                    'Frontend Developer',
                                    2000,
                                    'MERN Stack Developer',
                                    2000,
                                ]}
                                repeat={Infinity}
                            />
                        </span>
                    </motion.h2>

                    <motion.h4
                        initial={{ opacity: 0, x: -75 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        I create eye catching website
                    </motion.h4>

                    <motion.div
                        className="btnDiv d-flex gap-3 justify-content-center align-items-center flex-wrap"
                        initial={{ opacity: 0, x: -75 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <button className='btn'>
                            <a href="#contact">
                                contact me
                            </a>
                        </button>

                        <button className='btn'>
                            <a href={resume} target='_blank' rel='noreferrer'>
                                see my resume
                            </a>
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    className='col-lg-6 col-md-12 col-12 homeImgDiv d-flex justify-content-center align-items-center'
                    initial={{ opacity: 0, x: 75 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                >
                    <img src={homeDivImg} alt="" className='homeDivImg' />
                    <img src={htmlIcon} alt="" className='htmlIcon' />
                    <img src={jsonIcon} alt="" className='jsonIcon' />
                </motion.div>
            </div>
        </>
    )
}
