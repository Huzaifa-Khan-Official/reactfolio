import React, { useEffect, useRef } from 'react'
import servicesImg from '../assets/servicesImg.svg'
import servicesListIcon from '../assets/servicesListIcon.png'
import { servicesList, servicesIcons, servicesSubTitle } from '../Constants/Constants'

export default function Services({ scrolled }) {

    console.log("isServices ==> ", scrolled);



    return (
        <div className='row px-4 py-5'>
            <div className='col-lg-6 col-md-12 col-12 d-flex flex-column justify-content-center align-items-center'>
                <img src={servicesImg} alt="" className={`servicesImg ${scrolled && "fadeInRight"}`} />
            </div>
            <div className='col-lg-6 col-md-12 col-12 d-flex flex-column justify-content-center align-items-center servicesIconDiv'>
                <h1 className='servicesHeading'>
                    What I do
                </h1>
                <p className='servicesSubTitle'>
                    {servicesSubTitle}
                </p>

                <div className="skillIconsDiv">
                    <ul className='iconsList d-flex gap-4 align-items-center justify-content-center flex-wrap'>
                        {
                            servicesIcons.map((v, i) => {
                                return (
                                    <li className='singleIcon d-flex justify-content-center align-items-center flex-column' key={i}>
                                        <span className='servicesIcon'>
                                            {v.icon}
                                        </span>
                                        <p className='servicesIconTitle'>
                                            {v.title}
                                        </p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className="servicesListDiv">
                    {
                        servicesList.map((v, i) => {
                            return (
                                <div key={i} className='d-flex'>

                                    <div className="listImageDiv">
                                        <img src={servicesListIcon} className='servicesListIcon' alt="" />
                                    </div>
                                    <p className="listContentDiv">
                                        {v}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}