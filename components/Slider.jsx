"use client";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    //   slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    //   slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
    //   slidesToSlide: 1 // optional, default to 1.
    }
  };

const Slider = () => {
  return (
    <div>
        <Carousel responsive={responsive}>
          <div>item</div>
        </Carousel>
    </div>
  )
}

export default Slider