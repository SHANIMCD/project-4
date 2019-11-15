import React from 'react'
import axios from 'axios'

import GymCardIndex from './GymCardIndex'

class GymsIndex extends React.Component {

  constructor() {
    super()

    this.state = {
      gyms: null
    }
  }

  componentDidMount() {
    axios.get('/api/gyms')
      .then(res => this.setState({ gyms: res.data }))
      .catch(err => console.log(err))
  }


  render() {
    console.log(this.state)
    if (!this.state.gyms) return null
    return (

      <div>
        <div>
          {this.state.gyms.map(gym => (
            
            <GymCardIndex key={gym._id}{...gym}/>
          ))}
        </div>
      </div>

      

    )
  }
}

export default GymsIndex

// fetch('api/gyms')
// .then(res => res.json())
// .then(res => console.log(res))
// .catch(err => console.log(err))

// <div key={gym._id}>
            //   <h2>{gym.name}</h2>
            //   <img src={gym.image}/>
            //   <p>{gym.discipline.discipline_type}</p>
            // </div>