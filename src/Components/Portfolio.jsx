import React from 'react'
import ImageCarousel from './ImageCarousel'
import { portfolio } from '../Constants/Constants'

export default function Portfolio() {
    return (
        <div>
            portfolio

            <div className="portfolioProjects d-flex justify-content-center gap-4">
                {
                    portfolio.map((singleProject) => {
                        console.log(singleProject.images);
                        return (
                            <div className='singlePortfolio'>
                                <ImageCarousel images={singleProject.images} />
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}