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
      <ImageCarousel />
      {/* <img className="hp-image" src="https://static.onecms.io/wp-content/uploads/sites/35/2017/03/03190846/1200-woman-lifting-heavy-weights.jpg" /> */}
      
       <section className="homepagenav">
         
         <FrameworkTestPage />
       </section>
       
        

      </>
   
    )
  }



}
export default HomePage