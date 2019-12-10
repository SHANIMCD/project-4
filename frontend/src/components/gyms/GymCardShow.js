import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import GymsIndex from './GymsIndex'

// filterClasses() {
//   const classes = this.State.gyms.classes
//   this.state.gyms.map(gym => (        
//     <div key={classes.title}{...classes}/>
//   ))
// }

const GymCardShow = ({ name, image, lat, lon, address, discipline: {discipline_type}, classes, id, link }) => (
  <div className="gymcard-show" id="gym">
    <Card key={id} className="gymcard-show-1" style={{ width: '30rem' }}>
      <Card.Body>
        <Card.Title className="card-title" key={name}>{name}</Card.Title>
        <Card.Text className="card-text" key={discipline_type}>{discipline_type}</Card.Text>
        <Card.Img className="card-image" key={image} src={image}></Card.Img>
      
        <Card.Text className="card-text" key={lat}></Card.Text>
        <Card.Text className="card-text" key={lon}></Card.Text>
        <Card.Text className="card-text" key={address}>{address}</Card.Text>
        {/* <Card.Text className="card-text" key={title}>{title}</Card.Text> */}
        
      </Card.Body>
    </Card>
    <Card className="gymcard2" style={{ width: '30rem' }}>
      <Card.Body>
        <Card.Title className="card-title"></Card.Title>
        
        <ul>
          
          {classes.map(clas => (
            <>
            <li key={clas.id}>
              <Link to={clas.link}>Class name: {clas.title}
              </Link>
            </li>  
            <li>
              Level: {clas.class_level}
            </li> 
            <li>
              {clas.description}
            </li> 
            <li>
              {clas.class_duration}
            </li> 
            </>
          ))}
          
        </ul>
        
      </Card.Body>
    </Card>
  </div>
)

export default GymCardShow


// {classes.map(clas => (
//   <>
//   <p key={clas.id}>
//     {clas.title}
    
//   </p>   
//   <p key={clas.description}>{clas.description}</p>
//   </>
// ))}