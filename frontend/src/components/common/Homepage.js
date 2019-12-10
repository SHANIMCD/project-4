import React from 'react'

import ImageCarousel from './ImageCarousel'
import FrameworkTestPage from './FrameworkTestPage'
import SearchBox from '../common/SearchBox'


class HomePage extends React.Component {
  constructor(){
    super()

  }
  

  render(){
   
    return (    
      <> 
      <div id="home">
        {/* <ImageCarousel /> */}
        <img className="hero" src="https://www.crossfit-lehavre.com/wp-content/uploads/2017/05/crossfit-jpegs-118-of-1321.jpg" />
      
        <section className="homepagenav">
          <h1 className="homepage-title" >The Fitness Space</h1>
          <FrameworkTestPage />
        </section>

      </div>
      </>
   
    )
  }



}
export default HomePage