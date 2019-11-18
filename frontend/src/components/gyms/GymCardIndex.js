import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
// import Image from 'react-bootstrap/Image'


const GymCardIndex = ({ name, image, discipline: { discipline_type } , id }) => (
  <div>
    <Card key={id} className="gymcard" style={{ width: '20rem' }}>
      <Link to={`/gyms/${id}`}>
        {/* <Image key={image} src={image} fluid /> */}
        <Card.Img key={image} className="card-image" variant="top" src={image} />
        <Card.Body>
          <Card.Title key={name}>{name}</Card.Title>
          <Card.Text key={discipline_type}>{discipline_type}</Card.Text>
          {/* <Card.Text key={discipline}>{discipline}</Card.Text> */}
        </Card.Body>
      </Link>
    </Card>
  </div>
)

export default GymCardIndex