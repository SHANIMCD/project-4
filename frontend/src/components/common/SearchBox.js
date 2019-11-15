import React from 'react'

import axios from 'axios'

// import GymsIndex from '../gyms/GymsIndex'

class SearchBox extends React.Component {

  constructor() {
    super()

    this.state = {
      filtered: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentdidMount() {
    axios.get('/api/gyms')
      .then(res => this.setState({ classes: res.data }))
      .catch(err => console.log(err))
  }


  handleChange({ target: { value } }) {
    const filtered = value 
    console.log('you selected', filtered)
    return filtered
  }

  handleSubmit(e) {
    e.preventDefault()

    console.log(this.state.filtered)

    if (this.state.filtered === 'pilates') {
      console.log('you selected', this.state.filtered, 'good choice')
    }
    
  }


  render() {
    return (

      <div>

        <form onSubmit={this.handleSubmit} className="searchcontainer">
          <p>Search Class type</p>
          <input placeholder="search" name="search" onChange={this.handleChange} className="search-input"></input>
          <button className="search-button">search</button>
        </form>
       
      </div>


    )
  
  }

}

  

export default SearchBox