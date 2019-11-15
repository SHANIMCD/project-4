import React from 'react'
import { Link } from 'react-router-dom'
import GymsIndex from './GymsIndex'

const GymCard = ({ name, image, lat, lon, address, discipline, classes, _id }) => (
  <div>
    <Link to={`/gyms/${_id}`}>
      <div className="gymcard">
        <h4 key={name}>{name}</h4>
        <p key={discipline}></p>
        <img src={image}></img>
        <p key={lat}></p>
        <p key={lon}></p>
        <p key={address}>{address}</p>
        <p key={classes}></p>
      </div>

    </Link>
  </div>
)

export default GymCard