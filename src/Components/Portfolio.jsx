import React from 'react'
import ImageCarousel from './ImageCarousel'
import { portfolio } from '../Constants/Constants'

export default function Portfolio() {
    return (
        <div>
            portfolio

            <div className="portfolioProjects row justify-content-center gap-5">
                {
                    portfolio.map((singleProject, index) => {
                        return (
                            <div className='singlePortfolio col-lg-4 px-3 py-3' key={index}>
                                <ImageCarousel images={singleProject.images} />
                                <h3>
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