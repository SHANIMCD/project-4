import React from 'react'
import { Link } from 'react-router-dom'


const GymCardIndex = ({ name, image, discipline, _id }) => (
  <div>
    <Link to={`/gyms/${_id}`}>
      <div className="gymcard">
        <h4 key={name}>{name}</h4>
        <p key={discipline}></p>
        <img src={image}></img>
      </div>

    </Link>
  </div>
)

export default GymCardIndex