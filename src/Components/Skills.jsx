import React from 'react'
import skillsImg from '../assets/skills.png'
import { skillsIcons, skillsSubTitle } from '../Constants/Constants'

export default function Skills() {
    return (
        <div className='row px-4 py-5'>
            <div className='col-lg-6 col-md-12 col-12 d-flex flex-column justify-content-center align-items-center'>
                <img src={skillsImg} alt="" className='skillsImg' />
            </div>
            <div className='col-lg-6 col-md-12 col-12 d-flex flex-column justify-content-center align-items-center skillsIconDiv'>
                <h1 className='skillsHeading'>
                    What I do
                </h1>
                <p className='skillsSubTitle'>
                    {skillsSubTitle}
                </p>

                <div className="skillIconsDiv">
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
            </div>
        </div>
    )
}