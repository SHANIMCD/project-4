import React from 'react'
import axios from 'axios'
import GymCard from './GymCardIndex'



class GymIndividual extends React.Component {
  constructor() {
    super()

    this.state = {
      gym: null
    }
  }

  componentDidMount() {
    const gymId = this.props.match.params.id
    console.log(gymId)
    axios.get(`/api/gyms/${gymId}`)
      .then(res => this.setState({ gym: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.gym) return null
    const { gym } = this.state
    return (
      
      <>
      <h1>Gym Individual page</h1>

      <GymCard key={gym.id} {...gym}/>

      


      
      </>
    )
  }
}

export default GymIndividual