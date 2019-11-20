import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import NavBar from '../common/Navbar'
import Auth from '../lib/Auth'
import axios from 'axios'


class Login extends React.Component {

  constructor() {
    super()

    this.state = {
      data: {
        username: '',
        email: '',
        password: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value } }) {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
    console.log('logging', data)
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post('/api/login', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        this.setState({ username: res.data.name })
        console.log('Welcome', res.data )
        this.props.history.push('/loggedin')
      })
  }

  render () {
    return (
      <>
      <NavBar />
      <div className="formcontainer"> 
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="exampleEmail">Username</Label>
            <Input type="text" name="username" id="username" placeholder="Username" onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Email" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="Password" onChange={this.handleChange} />
          </FormGroup>
          <Button>Login</Button>
        </Form>
      </div>
      </>
    )
  }
 
}

export default Login