import React from 'react'
import ImageCarousel from './ImageCarousel'
import { portfolio } from '../Constants/Constants'
import { motion } from 'framer-motion'

export default function Portfolio() {
    return (
        <div>
            <motion.div
                className="portfolioTitleDiv text-center mb-5"
                initial={{ opacity: 0, y: 75 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <h5 className="portfolioTitle">
                    portfolio
                </h5>
                <h2 className="portfolioTitle">
                    Some of my latest works.
                </h2>
            </motion.div>

            <div className="portfolioProjects row justify-content-center gap-5">
                {
                    portfolio.map((singleProject, index) => {
                        return (
                            <motion.div
                                className='singlePortfolio col-lg-4 col-md-4 col-12'
                                key={index}
                                initial={{ opacity: 0, y: 75 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                <ImageCarousel images={singleProject.images} />
                                <h3 className='mt-2 pt-3'>
                                    {singleProject.title}
                                </h3>

                                <p>
                                    {
                                        singleProject.description
                                    }
                                </p>

                                <div className='singleProjectBtnDiv d-flex justify-content-center'>
                                    <button className='singleProjectBtn'>
                                        <a href={`${singleProject.link}`} target='_blank' rel="noreferrer">
                                            visit website
                                        </a>
                                    </button>
                                </div>

                            </motion.div>
                        )
                    })
                }
            </div>

        </div>
    )
}