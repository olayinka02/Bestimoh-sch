import React, { Component } from 'react';
import { Navbar, Dropdown, Nav } from 'react-bootstrap';
import badge from './image/badge.svg';

class Navbarx extends Component {

  
  render() {

    return (
      <div >
         <Navbar bg="light" style={{marginLeft:10,marginRight:10,marginTop:10,borderRadius:3}} expand="lg">
        <Navbar.Brand href="#home">
            <img
            alt=""
            src={badge}
            height="32"
            className="d-inline-block align-top"
             />{' '}
            
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Admission</Nav.Link>
            <Nav.Link href="#link">Academics</Nav.Link>
            <Nav.Link href="#link">Facilities</Nav.Link>
            <Nav.Link href="#link">News</Nav.Link>
            <Nav.Link href="#link">Contact-Us</Nav.Link>
            <Dropdown>
   
  </Dropdown>
            </Nav>
           
        </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}




export default Navbarx;

