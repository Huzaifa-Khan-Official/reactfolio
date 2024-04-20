import React from 'react'
import skillsImg from '../assets/skillsImg.svg'
import skillsListIcon from '../assets/skillsListIcon.png'
import { skillsList, skillsIcons, skillsSubTitle, education, professionalExperience } from '../Constants/Constants'
import { motion } from 'framer-motion'

export default function Skills() {
    return (
        <>
            <motion.h2
                className="servicesTitle text-center ps-5"
                initial={{ opacity: 0, y: 75 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                About
            </motion.h2>

            <div className='row py-4'>
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
                            <motion.ul
                                className='iconsList d-flex align-items-center justify-content-center flex-wrap'
                                initial={{ opacity: 0, x: 75 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                {
                                    skillsIcons.map((v, i) => {
                                        return (
                                            <motion.li
                                                className='singleIcon d-flex justify-content-center align-items-center flex-column mx-3'
                                                key={i}
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
                            </motion.ul>
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

            <motion.div
                className="portfolioTitleDiv ps-md-4 ps-4 mt-3"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <h2 className="portfolioTitle">
                    Education
                </h2>
            </motion.div>
            <div className="row gap-4 px-md-4 px-2 pe-4 mt-4">
                {
                    education.map((education, index) => {
                        return (
                            <motion.div
                                className='col-12 singleEducation d-flex flex-column gap-1 py-4 pt-2'
                                key={index}
                                initial={{ opacity: 0, y: 75 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                <img src={education.img} alt="" className="instituteLogo" />
                                <h5 className="instituteName">
                                    {education.instituteName}
                                </h5>
                                <h5 className="degreeName">
                                    {education.degreeName}
                                </h5>
                                <p className="duration">
                                    {education.duration}
                                </p>
                            </motion.div>
                        )
                    })
                }
            </div>

            <motion.div
                className="portfolioTitleDiv ps-md-4 ps-4 mt-4"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <h2 className="portfolioTitle">
                    Professional Experience
                </h2>
            </motion.div>
            <div className="row gap-4 px-md-4 px-2 pe-4 mt-4">
                {
                    professionalExperience.map((value, index) => {
                        return (
                            <motion.div
                                className='col-12 singleEducation d-flex flex-column gap-1 py-4 pt-2'
                                key={index}
                                initial={{ opacity: 0, y: 75 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                <img src={value.img} alt="" className="instituteLogo" />
                                <h5 className="instituteName">
                                    {value.name}
                                </h5>
                                <h5 className="degreeName">
                                    {value.role} <span>{value.certified && "(Certified)"}</span>
                                </h5>
                                <p className="duration">
                                    {value.duration}
                                </p>
                            </motion.div>
                        )
                    })
                }
            </div>
        </>
    )
}