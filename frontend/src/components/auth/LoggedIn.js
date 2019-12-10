// import React from 'react'
// import Navbar from '../common/Navbar'
// import Auth from '../lib/Auth'
// import Axios from 'axios'
// import AddGymForm from '../gyms/AddGymForm'

// class LoggedIn extends React.Component {
//   constructor() {
//     super()

//     this.state = {
//       user: {}
//     }
      
//   }

//   componentDidMount() {
//     console.log('Welcome Admin')
//     Axios.get('/loggedin/', {
//       headers: { Authorization: `Bearer ${Auth.getToken()}` }
//     })
//       .then(res => {
//         this.setState({ user: res.data })
//         console.log('this is the user: ', this.state.user)
//       })
//   }


//   render() {
//     console.log('hi admin')
//     return (

//       <>
//       <Navbar />
//       {/* <AddGymForm /> */}
//       <h1>Welcome back</h1>
//       </>
      

//     )
//   }
// }
// export default LoggedIn