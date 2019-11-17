import React from 'react'
import axios from 'axios'


class ClassIndex extends React.Component {

  constructor(){
    super()

    this.state = {
      classes: null
    }
    
  }

  componentDidMount(){
    axios.get('/gyms/class')
      .then(res => this.setState({ classes: res.data }))
      .catch(err => console.log(err))
  }

  render(){
    return (

      <h1>Hi</h1>
      
    )
  }

}

export default ClassIndex