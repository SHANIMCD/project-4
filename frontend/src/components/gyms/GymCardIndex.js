import React from 'react'
// import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'


const GymCardIndex = ({ name, image, discipline, _id }) => (
  <div>
    <Card key={_id} className="gymcard" style={{ width: '20rem' }}>
      {/* <Image key={image} src={image} fluid /> */}
      <Card.Img key={image} className="card-image" variant="top" src={image} />
      <Card.Body>
        <Card.Title key={name}>{name}</Card.Title>
        {/* <Card.Text key={discipline}>{discipline}</Card.Text> */}
        {/* <Card.Text key={discipline}>{discipline}</Card.Text> */}
      </Card.Body>
    </Card>
  </div>
)

export default GymCardIndex