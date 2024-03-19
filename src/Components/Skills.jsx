import React from 'react'
import skillsImg from '../assets/skills.png'

export default function Skills() {
    return (
        <div className='row px-4 py-5'>
            <div className='col-lg-6 col-md-12 col-12 d-flex flex-column justify-content-center align-items-center'>
                <img src={skillsImg} alt="" className='skillsImg' />
            </div>
            <div className='col-lg-6 col-md-12 col-12 d-flex flex-column justify-content-center align-items-center'>
                <h1 className='skillsHeading'>
                    What I do
                </h1>
                <p className='skillsSubTitle'>

                </p>
            </div>
        </div>
    )
}