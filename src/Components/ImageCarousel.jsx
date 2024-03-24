import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import bannerImg2 from '../assets/bannerImg2.svg'
import banner from '../assets/crm-banner.webp'
import skills from '../assets/skills.png'
import homeDivImg from '../assets/homeDivImg.png'

export default function ImageCarousel() {
    return (
        <div>
            <Carousel autoPlay infiniteLoop>

                <img src={banner} />

                <img src={skills} />

                <img src={homeDivImg} />

                <img src={bannerImg2} />

            </Carousel>
        </div>
    )
}