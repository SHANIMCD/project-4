import React from 'react'
import axios from 'axios'
// import GymCardIndex from './GymCardIndex'
import GymCardShow from './GymCardShow'



class GymIndividual extends React.Component {
  constructor() {
    super()

    this.state = {
      // data: {
      //   name: '',
      //   image: '',
      //   lat: '',
      //   lon: '',
      //   discipline: '',
      //   address: '',
      //   classes: []
      // }
      gym: null,
      class: null
      
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
      <body>
        <section>
          <h1>Gym Individual page</h1>
        </section>
        <section>
          <GymCardShow key={gym._id} {...gym}/>
        </section>
      </body>
      </>
    )
  }
}

export default GymIndividual