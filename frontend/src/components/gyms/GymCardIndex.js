import React from 'react'
import { Link } from 'react-router-dom'
import GymsIndex from './GymsIndex'

const GymCard = ({ name, image, discipline, _id }) => (
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

export default GymCard