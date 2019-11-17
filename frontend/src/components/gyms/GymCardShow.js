import React from 'react'
// import { Link } from 'react-router-dom'


const GymCardShow = ({ name, image, lat, lon, address, discipline, classes, title }) => (
  <div>
    <div className="gymcard">
      <h4 key={name}>{name}</h4>
      <p key={discipline}></p>
      <img key={image} src={image}></img>
      <p key={lat}></p>
      <p key={lon}></p>
      <p key={address}>{address}</p>
      <div key={classes}>
        <p key={title}></p>
      </div>
    </div>

    
  </div>
)

export default GymCardShow