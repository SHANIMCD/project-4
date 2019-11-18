import React, { useState } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl
  // CarouselIndicators
  // PropTypes
} from 'reactstrap'

const items = [
  {
    src: 'https://static.onecms.io/wp-content/uploads/sites/35/2017/03/03190846/1200-woman-lifting-heavy-weights.jpg'
  },
  {
    src: 'https://d22ir9aoo7cbf6.cloudfront.net/wp-content/uploads/sites/2/2017/02/Pilates-classes-in-Singapore.jpg'
  },
  {
    src: 'https://www.crossfit-lehavre.com/wp-content/uploads/2017/05/crossfit-jpegs-118-of-1321.jpg'
  
  }
]


// Carousel.propTypes = {
//   // the current active slide of the carousel
//   activeIndex: PropTypes.number,
//   // a function which should advance the carousel to the next slide (via activeIndex)
//   next: PropTypes.func.isRequired,
//   // a function which should advance the carousel to the previous slide (via activeIndex)
//   previous: PropTypes.func.isRequired,
//   // controls if the left and right arrow keys should control the carousel
//   keyboard: PropTypes.bool,
//   /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
//    * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
//    */
//   pause: PropTypes.oneOf(['hover', false]),
//   // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
//   // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
//   ride: PropTypes.oneOf(['carousel']),
//   // the interval at which the carousel automatically cycles (default: 5000)
//   interval: PropTypes.oneOfType([
//     PropTypes.number,
//     PropTypes.string,
//     PropTypes.bool
//   ]),
//   children: PropTypes.array,
//   // called when the mouse enters the Carousel
//   mouseEnter: PropTypes.func,
//   // called when the mouse exits the Carousel
//   mouseLeave: PropTypes.func,
//   // controls whether the slide animation on the Carousel works or not
//   slide: PropTypes.bool,
//   cssModule: PropTypes.object
// }




const ImageCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = (newIndex) => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
      </CarouselItem>
    )
  })

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} /> */}
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  )
}

export default ImageCarousel

