import React from 'react'
import ReactDOM from 'react-dom'

import FrameworkTestPage from './FrameworkTestPage'


class HomePage extends React.Component {
  constructor(){
    super()

  }


  render(){
    
    return (

      <> 
      <section></section>
       <section className="homepagenav">
         <h1>This is the HomePage</h1>   
         <FrameworkTestPage />
       </section>
       <section></section>
        

      </>
   
    )
  }

}


export default HomePage