import React from 'react'
import skillsImg from '../assets/skillsImg.svg'
import skillsListIcon from '../assets/skillsListIcon.png'
import { skillsList, skillsIcons, skillsSubTitle } from '../Constants/Constants'
import { motion } from 'framer-motion'

export default function Skills() {
    return (
        <div className='row px-2 py-5 pb-1'>
            <motion.div
                className='col-lg-6 col-md-12 col-12 d-flex flex-column justify-content-center align-items-center'

                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <img
                    src={skillsImg}
                    alt=""
                    className="skillsImg"
                />
            </motion.div>
            <div className="col-lg-6 col-md-12 col-12 d-flex justify-content-center align-items-center">
                <div className='d-flex flex-column justify-content-center align-items-center skillsIconDiv'>

                    <motion.h3
                        className="skillsHeading"
                        initial={{ opacity: 0, x: 75 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        Skills
                    </motion.h3>
                    <motion.p
                        className="skillsSubTitle"
                        initial={{ opacity: 0, x: 75 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        {skillsSubTitle}
                    </motion.p>

                    <div className="skillIconsDiv">
                        <ul className='iconsList d-flex gap-4 align-items-center justify-content-center flex-wrap'>
                            {
                                skillsIcons.map((v, i) => {
                                    return (
                                        <motion.li
                                            className='singleIcon d-flex justify-content-center align-items-center flex-column'
                                            key={i}
                                            initial={{ opacity: 0, x: 75 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1 }}
                                        >
                                            <span className='skillsIcon'>
                                                {v.icon}
                                            </span>
                                            <p className='skillsIconTitle'>
                                                {v.title}
                                            </p>
                                        </motion.li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className="skillsListDiv">
                        {
                            skillsList.map((v, i) => {
                                return (
                                    <motion.div
                                        key={i}
                                        className='d-flex'
                                        initial={{ opacity: 0, x: 75 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1 }}
                                    >

                                        <div className="listImageDiv">
                                            <img src={skillsListIcon} className='skillsListIcon' alt="" />
                                        </div>
                                        <p className="listContentDiv">
                                            {v}
                                        </p>
                                    </motion.div>
                                )
                            })
                        }
                    </div>

                </div >

            </div >
        </div >
    )
}