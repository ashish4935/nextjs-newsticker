import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";


const SliderButton = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
  return (
    //  remember to give it position:absolute
    <div className="carousel-button-group">
        <button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()}>
            <ChevronLeftIcon className="h-6 w-6"/>
        </button>
        <button onClick={() => next()}>
            <ChevronRightIcon className="h-6 w-6"/>
        </button>
      {/* <ButtonOne className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} /> */}
      {/* <ButtonTwo onClick={() => next()} /> */}
      {/* <ButtonThree onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </ButtonThree> */}
    </div>
  )
}

export default SliderButton