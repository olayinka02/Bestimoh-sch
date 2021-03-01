import { render } from '@testing-library/react';
import React, { useState } from 'react';


import { Modal, Container, Col, Row, Button, Form } from 'react-bootstrap';






function Formbody(props) {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Admission Form.
          </Modal.Title>
         
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
            <Col md={12} sm={12}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name:</Form.Label>
                <Form.Control size="sm" type="email" placeholder="Enter email" />
                <Form.Label>Class</Form.Label>

                <Form.Control size="sm" type="email" placeholder="Enter email" />
                <Form.Label>Email address</Form.Label>

                <Form.Control size="sm" type="email" placeholder="Enter email" />
                <Form.Label>Email address</Form.Label>

                <Form.Control size="sm" type="email" placeholder="Enter email" />
                <Form.Label>Email address</Form.Label>

                <Form.Control size="sm" type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control size="sm" type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="outline-danger" type="submit">
                Submit
              </Button>
            </Form>
            </Col>
            </Row>
  
            <Row>
             
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success"  onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function App() {
     
          const [modalShow, setModalShow] =useState(false);
  
    return (
      <>

        <Container fluid style={{width:'100%'}}>
            <div className="formbody">
              <center  >
              <h2 style={{color:'white'}}>Admission Is On Going</h2>
              <Button  variant="success"  onClick={() => setModalShow(true)} >click</Button>
                <h2 style={{color:'white'}}>Register For External Exam</h2>
                <Button   variant="danger"  onClick={() => setModalShow(true)}>Success</Button>
              </center>

            </div>
          </Container>

       
        <Formbody show={modalShow} onHide={() => setModalShow(false)} />
      </>
    );
  }
  
  render(<App />);
  
export default Formbody;