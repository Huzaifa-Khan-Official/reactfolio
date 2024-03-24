import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function ImageCarousel({ images }) {
    return (
        <Carousel autoPlay infiniteLoop>
            {
                images.map((image, index) => {
                    return (
                        <img src={image} alt="" key={index} />
                    )
                })
            }
        </Carousel>
    )
}