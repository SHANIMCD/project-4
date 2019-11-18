import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'

const Navigation = (props) => {
  return (
    <div className="Nav-style">      
      <hr />
      <Nav>
        <NavLink href="/home">Home</NavLink> <NavLink href="/login">Admin Portal</NavLink>
      </Nav>
      <hr />
    </div>
  )
}

export default Navigation