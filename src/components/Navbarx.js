import React, { Component, useState } from 'react';
import { Navbar, Dropdown, Nav, FormControl } from 'react-bootstrap';
import badge from './image/badge.svg';

class Navbarx extends Component {

  
  render() {

   
    
    const CustomMenu = React.forwardRef(
      ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
        const [value, setValue] = useState('');
    
        return (
          <div
            ref={ref}
            style={style}
            className={className}
            aria-labelledby={labeledBy}
          >
            <FormControl
              autoFocus
              className="mx-3 my-2 w-auto"
              placeholder="Type to filter..."
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
            <ul className="list-unstyled">
              {React.Children.toArray(children).filter(
                (child) =>
                  !value || child.props.children.toLowerCase().startsWith(value),
              )}
            </ul>
          </div>
        );
      },
    );
     
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
    <Dropdown.Toggle style={{marginTop:1,color:'green',}} variant="light"  id="dropdown-custom-components">
      Others
    </Dropdown.Toggle>

    <Dropdown.Menu as={CustomMenu}>
      <Dropdown.Item eventKey="1">Red</Dropdown.Item>
      <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
      <Dropdown.Item eventKey="3" active variant="light">
        Orange
      </Dropdown.Item>
      <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
            </Nav>
           
        </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}




export default Navbarx;

