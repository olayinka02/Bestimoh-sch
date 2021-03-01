import { render } from '@testing-library/react';
import React, { useState } from 'react';


import { Modal, Container, Col, Row, Button, Form } from 'react-bootstrap';






function Formbody(props) {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Using Grid in Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
             <Form>
               <Formbody>
                 name:<input type="text" />
               </Formbody>
             </Form>
            </Row>
  
            <Row>
              <Col xs={6} md={4}>
                .col-xs-6 .col-md-4
              </Col>
              <Col xs={6} md={4}>
                .col-xs-6 .col-md-4
              </Col>
              <Col xs={6} md={4}>
                .col-xs-6 .col-md-4
              </Col>
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