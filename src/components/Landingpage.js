import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { CardText, GeoAlt, TelephoneOutbound } from "react-bootstrap-icons";
import schbadge from './image/schbadge.svg';

class Landingpage extends Component {

  
  render() {

    return (
      <div className="landingpage">
        <Container>
  <Row>
    <Col xl={5} sm={5} md={5} xs={12}>
      <center>
      <div className="badge" >
      <center>
      <h6 className="schoolname">Bestimoh Foundation Academy</h6>
      </center><br/>
      <center>
        <div className="badgeplaceone"><br/>
          <center>
            <div className="badgebody"><br/><br/>
              <img alt="badge" src={schbadge} />
            </div>
          </center>

        </div>
        <div className="badgeplacetwo">
         

        </div>
      </center>
      <div className="addressbadge"><br/>
        <h6 style={{fontSize:12,color:' #89C66C'}}><GeoAlt /> Aku Village Base (IV), Antenna Mararaba</h6>
        <h6 style={{fontSize:15,color:' #89C66C'}} ><TelephoneOutbound /> 08101831001</h6>
       
      </div>

      

    </div>
      </center>
    </Col>
    <Col xl={6} sm={6} md={6} xs={12}>
      <div className="about">
         <center>
        <h5 style={{color:'#95280B',}}>Welcome to <span style={{color:'#95232A'}}><b>BESTIMOH FOUNDATION ACADEMY</b></span></h5>
        </center>
        <h1><CardText style={{color:'red',}}/> <span style={{fontSize:20,color:'#DD3D3D'}}>About</span></h1>
        
        <p style={{justifyContent:'center',color:'whitesmoke',paddingLeft:10,paddingRight:10,}}>At Bestimoh, our goal is to make out of your child a well-developed 
        person who is academically sound, mentally stable and spiritually mature. 
        We pride ourselves on our determination to raise pupils who have instilled 
        in them the culture of discipline and hard work.We offer Federal govt of Nigeria curriculum, which is designed to effectively prepare our students 
        
        We celebrate the values and heritage of Nigeria.We are committed to giving hope to the academically challenged child, as 
        we ensure that no student is allowed to remain or labelled dull. In other words, 
        we give individualized attention to such students. </p>
       
      </div>
    </Col>
  </Row>
  </Container>
 </div>
    );
  }
}




export default Landingpage;

