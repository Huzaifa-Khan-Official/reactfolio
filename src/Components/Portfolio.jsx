import React from 'react'
import ImageCarousel from './ImageCarousel'
import { portfolio } from '../Constants/Constants'

export default function Portfolio() {
    return (
        <div>

            <div className="portfolioTitleDiv text-center mb-5">
                <h5 className='portfolioTitle'>
                    portfolio
                </h5>
                <h2>
                    Some of my latest works.
                </h2>
            </div>

            <div className="portfolioProjects row justify-content-center gap-5">
                {
                    portfolio.map((singleProject, index) => {
                        return (
                            <div className='singlePortfolio col-lg-4' key={index}>
                                <ImageCarousel images={singleProject.images} />
                                <h3 className='mt-2 pt-3'>
                                    {singleProject.title}
                                </h3>

                                <p>
                                    {
                                        singleProject.description
                                    }
                                </p>

                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}