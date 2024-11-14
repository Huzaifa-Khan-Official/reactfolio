import React from 'react'
import { motion } from 'framer-motion'
import Marquee from "react-fast-marquee"
import { certifications } from '../Constants/Constants'

const Certificates = () => {
    return (
        <div>
            <motion.div
                className="portfolioTitleDiv ps-md-4 ps-4 mt-4"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <h2 className="portfolioTitle">
                    certifications
                </h2>
            </motion.div>
            <motion.div
                className='px-3 justify-content-center  my-4'
                initial={{ opacity: 0, y: 75 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <Marquee className='py-2 overflow-hidden' pauseOnHover={true} gradient={true} gradientWidth={50}>
                    {
                        certifications.map((certification, index) => {
                            return (
                                <div className='certificateDiv cardDiv ms-3' key={index}>
                                    <img src={certification.img} alt={certification.certificationName} className='' />
                                    <div className="certificateDetailDiv">
                                        <h4 className="certificateName">Name: {certification.certificationName}</h4>
                                        <h6 className="issuingOrganization">Issuing organization: {certification.certificateProvider}</h6>
                                        <p className="issueDate">Issue date: {certification.issuedDate}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Marquee>
            </motion.div>
        </div>
    )
}

export default Certificates