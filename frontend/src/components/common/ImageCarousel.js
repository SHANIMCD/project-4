import React from 'react'
import { UncontrolledCarousel } from 'reactstrap'



const items = [
  {
    src: 'https://static.onecms.io/wp-content/uploads/sites/35/2017/03/03190846/1200-woman-lifting-heavy-weights.jpg',
    caption: ''
  },
  {
    src: 'https://d22ir9aoo7cbf6.cloudfront.net/wp-content/uploads/sites/2/2017/02/Pilates-classes-in-Singapore.jpg',
    caption: ''
  },
  {
    src: 'https://www.crossfit-lehavre.com/wp-content/uploads/2017/05/crossfit-jpegs-118-of-1321.jpg',
    caption: ''
  
  }
]

const ImageCarousel = () => <UncontrolledCarousel items={items} ride="carousel" /> 

export default ImageCarousel