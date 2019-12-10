import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
// import { Link, withRouter } from '../lib/Auth'
import ReactDOM from 'react-dom'


const Navigation = () => {
  return (
    <div className="Nav-style">      
      <hr />
      <Nav>
        <NavLink className="nav-link-left" href="/" >Home</NavLink> <NavLink className="nav-link-left" href="/gyms" >Gyms</NavLink> <NavLink className="nav-link-left" href="/gyms/new"> Suggest a gym</NavLink>
      </Nav>
      <hr />
    </div>
  )
}

export default Navigation