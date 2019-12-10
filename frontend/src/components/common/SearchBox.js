import React from 'react'
import axios from 'axios'

// import GymsIndex from '../gyms/GymsIndex'
import GymCardIndex from '../gyms/GymCardIndex'
import GymCardShow from '../gyms/GymCardShow'
// import { throws } from 'assert'

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
    const { search, gyms } = this.state
    // console.log(discipline)
    const re = new RegExp(search, 'i')
    const filtered = gyms.filter(gym => {
      return re.test(gym.name)
    })
    return this.filterDropdown(filtered)
  }

  filterDropdown(array) {
    if (this.state.discipline === 'All') {
      return array
    }
    return array.filter(disc => disc.discipline.discipline_type === this.state.discipline)
  }



  render() {
    console.log(this.state.gyms)
    console.log(this.filteredGyms())
    return (
      <>

      <div className="filtercontainer" id="searchbox" onChange={this.handleChange}>
        <p>Select an option below to choose preferred discipline</p>
        <select onChange={this.handleChange} name="discipline">
          <option value="All">All</option>
          <option value="Bodybuilding">Bodybuilding</option>
          <option value="Pilates">Pilates</option>
          <option value="CrossFit">Crossfit</option>
        </select> 
        <span className="searchcontainer">
          
          <input placeholder="Search"  name="search" className="search-input"></input>
          <button className="search-button">search</button>
          <hr />
          <div className="filtered">{this.filteredGyms().map(gym => <GymCardIndex key={gym.name} {...gym} />)}</div>
        </span>
      </div>
  
    </>

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