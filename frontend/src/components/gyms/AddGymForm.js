import React from 'react'
import Auth from '../lib/Auth'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import NavBar from '../common/Navbar'
// import Footer from '../common/Footer'



class AddGymForm extends React.Component {

  constructor() {
    super() 

    this.state = {
      data: {
        image: '',
        name: '',
        lat: '',
        lon: '',
        address: [],
        discipline: {
          discipline_type: ''
        },
        classes: [
          {
            title: '',
            class_level: '',
            description: '',
            class_duration: '',
            link: ''
          }
        ]
      },
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.onchange = this.onchange.bind(this)
    this.addClass = this.addClass.bind(this)
  }

  handleChange(e) {
    console.log('these be the changes')
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    const errors = { ...this.state.errors, [e.target.name]: '' }
    this.setState({ data, errors })
  }

  addClass() {
    console.log('clicked')
    const classes = [...this.state.data.classes, {} ]

    this.setState({ data: { ...this.state.data, classes } })
  }


  handleSubmit(e) {
    e.preventDefault()
    console.log('sent')
    console.log()
    axios.post('/api/gyms', this.state.data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` } 
    })
      .then(res => {
        this.props.history.push(`/gyms/${res.data.id}`)
      })
      .catch(err => console.log(err.message))
  }


  render() {
    console.log(this.state)
    return (
      <>
      
      
      <section>
        <NavBar />
        <img className="hero" src='https://static.onecms.io/wp-content/uploads/sites/35/2017/03/03190846/1200-woman-lifting-heavy-weights.jpg' />
        <div className="add-formcontainer">
          <Form onChange={this.handleChange} data={this.state.data} onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="imagelink">Image</Label>
              <Input type="text" value={this.state.data.image} name="image" id="imagelink" placeholder="Image" />
            </FormGroup>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" value={this.state.data.name} name="name" id="gymname" placeholder="Name" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Address</Label>
              <Input type="textarea" value={this.state.data.address} name="address" id="address" placeholder="Gym Address" />
            </FormGroup>
            <FormGroup>
              <Label for="Latitude">Lat</Label>
              <Input type="number" value={this.state.data.lat} name="lat" id="latitude" placeholder="Latitude" />
            </FormGroup>
            <FormGroup>
              <Label for="Longitude">Lon</Label>
              <Input type="number" value={this.state.data.lon} name="lon" id="longitude" placeholder="Longitude" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Discipline</Label>
              <Input type="select" onChange={this.onchange} value={this.state.data.discipline_type} name="discipline" id="discipline_type">
                <option>Bodybuilding</option>
                <option>Pilates</option>
                <option>Crossfit</option>
              </Input>
            </FormGroup>
            {this.state.data.classes.map((_class, index) => {
              return (
                <div key={index}>
                  <FormGroup >
                    <Label for="title">Class Title</Label>
                    <Input type="text" value={_class.title || ''} name="title" id="title" placeholder="Title" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="class_level">Class Level</Label>
                    <Input type="text" value={_class.class_level || ''} name="class_level" id="class_Level" placeholder="class Level" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type="text" value={_class.description || '' } name="description" id="desription" placeholder="Description" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="class_duration">Class duration</Label>
                    <Input type="text" value={_class.class_duration || ''} name="class_duration" id="class_duration" placeholder="Duration" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="link">Link</Label>
                    <Input type="text" value={_class.link || '' } name="link" id="link" placeholder="Link" />
                  </FormGroup>
                  <button type="button" onClick={this.addClass}>Add another class</button>
                </div>
              )
            })}
            <Button>Add Gym</Button>
          </Form>
        </div>
      </section>
    </>

    )

  }
}

export default AddGymForm


// const AddGymForm = ({ image, name, address, Discipline, has_classes, classes: { title } }) => {
//   console.log('dataaaaaaa', data)
//   return (
//     <div className=''>
//       <section className='section'>
//         <form onSubmit={this.handleSubmit}>
//           <div className='content'>

            
//             <div className="u-full-width">
//               <label name="exampleRecipientInput" type='text'>Image</label>
//               <input
//                 className="input-area"
//                 placeholder="Image"
//                 name='image'
//                 value={data.image}
//               >
//               </input>
//             </div>

//             <div className="u-full-width">
//               <label name="exampleRecipientInput" type='text'>Name</label>
//               <input
//                 className="input-area"
//                 placeholder="Name"
//                 name='name'
//                 value={data.name}
//               >
//               </input>
//             </div>

//             <div className="u-full-width">
//               <label name="exampleMessage">Address</label>
//               <textarea
//                 className="input-area"
//                 placeholder="Adress"
//                 name="Address"
//                 value={data.address}
//                 >
//               </textarea>
//             </div>


//             <div className="input-area">
//               <label className="label">Discipline</label>
//               <div className="control">
//                 <Select
//                   name="frameworks"
//                   options={discipline}
//                   isMulti={false}
//                   onChange={handleFramework}
//                   value={data.frameworks}
//                 />
//               </div>
//             </div>


//             <div className="input-area">
//               <label name="exampleRecipientInput">Languages</label>
//               <div className="control">
//                 <Select
//                   name="languages"
//                   options={languages}
//                   isMulti={false}
//                   onChange={handleLanguage}
//                   value={data.languages}
//                 />
//               </div>
//             </div>
            
            
//             <button type="submit" className=''>Submit</button>

//           </div>
//         </form>
//       </section>
//     </div>
//   )
// }
// export default AddGymForm