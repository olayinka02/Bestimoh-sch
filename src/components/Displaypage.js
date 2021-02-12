import React, { Component } from 'react';
import { Container, Carousel,  } from 'react-bootstrap';
import school1 from './image/school1.svg';

class Displaypage extends Component {

  
  render() {
      return(
        <div className="carouselbody">
            <Container fluid>
            <Carousel>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src={school1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h5>Frontview Nursery Section.</h5>
              
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src={school1}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h5>Third Gate</h5>
               
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={school1}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h5>Nursery-Two</h5>
               
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src={school1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h5 style={{color:'red'}}>Frontview Secondary Section</h5>
               
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src={school1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h5>Nursery-One</h5>
               
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src={school1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h5>Nursery-Two</h5>
               
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src={school1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h5 style={{color:'red'}} >Sideview Nursery Section</h5>
               
                </Carousel.Caption>
            </Carousel.Item>
           
            </Carousel>
            </Container>

        </div>
          
      );
  }
}




export default Displaypage;

