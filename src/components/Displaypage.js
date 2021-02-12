import React, { Component } from 'react';
import { Container, Carousel,  } from 'react-bootstrap';
import school1 from './image/school1.svg';
import school2 from './image/school2.svg';
import school3 from './image/school3.svg';
import school4 from './image/school4.svg';
import school5 from './image/school5.svg';
import school6 from './image/school6.svg';
import school7 from './image/school7.svg';

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
                src={school2}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h5>Third Gate</h5>
               
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={school3}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h5>Nursery-Two</h5>
               
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src={school4}
                alt="First slide"
                />
                <Carousel.Caption>
                <h5 style={{color:'red'}}>Frontview Secondary Section</h5>
               
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src={school5}
                alt="First slide"
                />
                <Carousel.Caption>
                <h5>Nursery-One</h5>
               
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src={school6}
                alt="First slide"
                />
                <Carousel.Caption>
                <h5>Nursery-Two</h5>
               
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src={school7}
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

