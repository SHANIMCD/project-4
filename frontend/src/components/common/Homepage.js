import React from 'react'

import ImageCarousel from './ImageCarousel'
import FrameworkTestPage from './FrameworkTestPage'


class HomePage extends React.Component {
  constructor(){
    super()

  }
  

  render(){
   
    return (    
      <> 
      {/* <ImageCarousel /> */}
      <img className="hero" src="https://www.crossfit-lehavre.com/wp-content/uploads/2017/05/crossfit-jpegs-118-of-1321.jpg" />
      
       <section className="homepagenav">
         
         <FrameworkTestPage />
       </section>
       
        

      </>
   
    )
  }



}
export default HomePage