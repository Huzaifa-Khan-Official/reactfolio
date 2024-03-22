import React, { useEffect, useRef } from 'react'
import skillsImg from '../assets/skillsImg.svg'
import skillsListIcon from '../assets/skillsListIcon.png'
import { skillsList, skillsIcons, skillsSubTitle } from '../Constants/Constants'

export default function Skills({ scrolled }) {
    return (
        <div className='row px-4 py-5 pb-1'>
            <div className='col-lg-6 col-md-12 col-12 d-flex flex-column justify-content-center align-items-center'>
                <img src={skillsImg} alt="" className={`skillsImg ${scrolled && "fadeInLeft"}`} />
            </div>
            <div className="col-lg-6 col-md-12 col-12 d-flex justify-content-center align-items-center">
                <div className='d-flex flex-column justify-content-center align-items-center skillsIconDiv'>

                    <h1 className={`skillsHeading ${scrolled && "fadeInRight"}`}>
                        What I do
                    </h1>
                    <p className={`skillsSubTitle ${scrolled && "fadeInRight"}`}>
                        {skillsSubTitle}
                    </p>

                    <div className={`skillIconsDiv ${scrolled && "fadeInRight"}`}>
                        <ul className='iconsList d-flex gap-4 align-items-center justify-content-center flex-wrap'>
                            {
                                skillsIcons.map((v, i) => {
                                    return (
                                        <li className='singleIcon d-flex justify-content-center align-items-center flex-column' key={i}>
                                            <span className='skillsIcon'>
                                                {v.icon}
                                            </span>
                                            <p className='skillsIconTitle'>
                                                {v.title}
                                            </p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className={`skillsListDiv ${scrolled && "fadeInRight"}`}>
                        {
                            skillsList.map((v, i) => {
                                return (
                                    <div key={i} className='d-flex'>

                                        <div className="listImageDiv">
                                            <img src={skillsListIcon} className='skillsListIcon' alt="" />
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
        </div>
    )
}