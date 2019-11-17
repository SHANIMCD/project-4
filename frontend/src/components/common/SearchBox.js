import React from 'react'

import axios from 'axios'

import GymsIndex from '../gyms/GymsIndex'
import GymCardIndex from '../gyms/GymCardIndex'

class SearchBox extends React.Component {

  constructor() {
    super()

    this.state = {
      gyms: [],
      discipline: 'All',
      search: ''
    }

    this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
    // this.filteredGyms = this.filteredGyms.bind(this)
  }

  componentDidMount() {
    axios.get('/api/gyms')
      .then(res => this.setState({ gyms: res.data }))
      .catch(err => console.log(err))
  }



  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  filteredGyms() {
    const { discipline, search, gyms } = this.state
    const re = new RegExp(search, 'i')
    return gyms.filter(gym => {
      return re.test(gym.name) && (gym.discipline === discipline || discipline === 'All')
    })
  }


  render() {
    console.log(this.state.gyms)
    return (

      <div className="filtercontainer" onChange={this.handleChange}>
        <select onChange={this.handleChange} name="discipline">
          <option value="All">All</option>
          <option value="Bodybuilding">Bodybuilding</option>
          <option value="Pilates">Pilates</option>
          <option value="Crossfit">Crossfit</option>
        </select> 
        <div className="searchcontainer">
          <p>Search Class type</p>
          <input placeholder="Search"  name="search" className="search-input"></input>
          <button className="search-button">search</button>
          <div className="filtered">{this.filteredGyms().map(gym => <GymCardIndex key={gym.name} {...gym} />)}</div>
        </div>
       
      </div>
        
    


    )
  
  }

}

  

export default SearchBox


// handleChange({ target: { value } }) {
//   const filtered = value 
//   console.log('you selected', filtered)
//   this.setState({ filtered })
// }

// handleSubmit(e) {
//   e.preventDefault()

//   // console.log(this.state.gyms)

//   // if (this.state.filtered === 'pilates') {
//   //   console.log('you selected', this.state.filtered, 'good choice')
//   // }
    
// }