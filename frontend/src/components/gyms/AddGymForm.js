import React from 'react'
import Auth from '../lib/Auth'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import NavBar from '../common/Navbar'
import Footer from '../common/Footer'



class AddGymForm extends React.Component {

  constructor() {
    super() 

    this.state = {
      data: {
        image: '',
        name: '',
        lat: null,
        lon: null,
        address: '',
        // has_classes: Boolean,
        discipline: {}
        // classes: []
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('sent')
    axios.post('/gyms')
      .then(res => {
        this.props.history.push(`gyms/${res.data.id}`)
      })
      .catch(err => console.log(err.message))
  }

  render() {
    return (
      <>
      
      <section>
        <NavBar />
        <div className="gymcard">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="imagelink">Image</Label>
              <Input type="text" name="image" id="imagelink" placeholder="Image" />
            </FormGroup>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" id="gymname" placeholder="Name" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Address</Label>
              <Input type="textarea" name="text" id="Address" />
            </FormGroup>
            <FormGroup>
              <Label for="Latitude">Lat</Label>
              <Input type="number" name="latitude" id="latitude" placeholder="Latitude" />
            </FormGroup>
            <FormGroup>
              <Label for="Longitude">Lon</Label>
              <Input type="number" name="longitude" id="longitude" placeholder="Longitude" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Discipline</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>Bodybuilding</option>
                <option>Pilates</option>
                <option>Crossfit</option>
              </Input>
            </FormGroup>
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