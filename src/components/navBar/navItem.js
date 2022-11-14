import './navItem.css'
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Nav from 'react-bootstrap/Nav';


const NavItem = () => {
    return (
        <>
    <ul className='nav-list'> 
         <a href="/" className='nav-name'>Quan Bui <FontAwesomeIcon icon="fa-solid fa-code" /> </a> 
          <Nav className="nav-item-container" bg="light" variant="light">
            <Nav className="nav-item" href="#home">About Me</Nav>
            <Nav  className="nav-item" href="#pricing">Skills</Nav>
            <Nav className="nav-item" href="#features">Projects</Nav>
            <Nav className="nav-item" href="#features">Contact</Nav>
          </Nav>
      </ul>
    </>
    )
}

export default NavItem