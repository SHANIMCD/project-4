import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { Link, withRouter } from '../lib/Auth'


const Navigation = (props) => {
  return (
    <div className="Nav-style">      
      <hr />
      <Nav>
        <NavLink className="nav-link-left" href="/" >Home</NavLink> <NavLink className="nav-link-left" href="/gyms/new"> Suggest a gym</NavLink> <NavLink href="{% url 'admin:index' %}" className="nav-link-right">Admin Login</NavLink>
      </Nav>
      <hr />
    </div>
  )
}

export default Navigation