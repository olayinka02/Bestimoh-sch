import React, { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { CardText, GeoAlt, TelephoneOutbound, HandIndexFill, Lightbulb, Building, PersonFill } from "react-bootstrap-icons";
import schbadge from './image/schbadge.svg';
import ola1 from './image/ola1.jpg';
import undraw1 from './image/undraw1.svg';



  
  const Landingpage = () => {
    useEffect(() => {
       Aos.init({duration: 1200 });
    }, []);
    return (
      <div className="landingpage">
        <Container fluid>
  <Row>
    <Col  data-aos="zoom-in" xl={5} sm={5} md={5} xs={12}>
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
      <div  data-aos="fade-up"  className="addressbadge"><br/>
        <h6 style={{fontSize:12,color:' #89C66C'}}><GeoAlt /> Aku Village Base (IV), Antenna Mararaba</h6>
        <h6 style={{fontSize:15,color:' #89C66C'}} ><TelephoneOutbound /> 08101831001</h6>
        <center>
          <p style={{color:'whitesmoke',}}>click <HandIndexFill /> to contact us</p>
        </center>
       
      </div>


    </div>
      </center>
    </Col>
    <Col xl={6} sm={6} md={6} xs={12}>
      <div  data-aos="fade-up"  className="about">
         <center>
        <h5 style={{color:'#95280B',}}>Welcome to <span style={{color:'#95232A'}}><b>BESTIMOH FOUNDATION ACADEMY</b></span></h5>
        </center>
        <h1 style={{paddingLeft:10,}}><CardText style={{color:'#95232A',}}/><b><span style={{fontSize:20,color:'#95232A'}}> About</span></b></h1>     
        <p style={{justifyContent:'center',color:'whitesmoke',paddingLeft:10,paddingRight:10,fontSize:14,}}>At Bestimoh, our goal is to make out of your child a well-developed 
        person who is academically sound, mentally stable and spiritually mature. 
        We pride ourselves on our determination to raise pupils who have instilled 
        in them the culture of discipline and hard work.We offer Federal govt of Nigeria curriculum, which is designed to effectively prepare our students 
        
        We celebrate the values and heritage of Nigeria.We are committed to giving hope to the academically challenged child, as 
        we ensure that no student is allowed to remain or labelled dull. In other words, 
        we give individualized attention to such students. </p>

        <h1 style={{paddingLeft:10,}}><Lightbulb style={{color:'#95232A',}}/><b><span style={{fontSize:20,color:'#95232A'}}> Our Mission</span></b></h1>
        <p style={{justifyContent:'center',color:'whitesmoke',paddingLeft:10,paddingRight:10,fontSize:14,}} >Our mission is to raise future leaders and end time revivalists who are academically sound, emotionally stable and spiritually mature.</p>
       
      </div>
    </Col>
  </Row>
  </Container><br/>


  <Container>
  <Row>
     <Col>
      <div  data-aos="fade-up"  className="speech">
        <center>
         <img src={ola1} alt="speechimage"  className="speechimage" />
        </center>
        <center><h5 style={{color:'#95232A',marginTop:8,}}>Founder</h5></center>
        <center>
        <div className="speechline" ></div>
        </center>
        <p style={{fontSize:12,color:'whitesmoke',marginTop:9,}}>  We celebrate the values and heritage of Nigeria.
        We are committed to giving hope to the academically challenged child, as 
        <br/><h5 style={{float:'right',color:'#89C66C'}} >Bar. Imoh</h5></p>
       
      </div>
     </Col>
     <Col>
     <div  data-aos="fade-up"  className="speech">
        <center>
         <img src={ola1} alt="speechimage"  className="speechimage" />
        </center>
        <center><h5 style={{color:'#95232A',marginTop:8,}}>Propritress</h5></center>
        <center>
        <div className="speechline" ></div>
        </center>
        <p style={{fontSize:12,color:'whitesmoke',marginTop:9,}}>  We celebrate the values and heritage of Nigeria.
        We are committed to giving hope to the academically challenged child, as 
        <br/><h6 style={{float:'right',color:'#89C66C'}} >Mrs.Ngozi Imoh</h6></p>
       
      </div>
      </Col>
     <Col>
     <div  data-aos="fade-up"  className="speech">
        <center>
         <img src={ola1} alt="speechimage"  className="speechimage" />
        </center>
        <center><h5 style={{color:'#95232A',marginTop:8,}}>Principal</h5></center>
        <center>
        <div className="speechline" ></div>
        </center>
        <p style={{fontSize:12,color:'whitesmoke',marginTop:9,}}>  We celebrate the values and heritage of Nigeria.
        We are committed to giving hope to the academically challenged child, as
        <br/><h6 style={{float:'right',color:'#89C66C'}} >Mrs Dora</h6> </p>
       
      </div>
      </Col>
     <Col>
     <div  data-aos="fade-up"  className="speech">
        <center>
         <img src={ola1} alt="speechimage"  className="speechimage" />
        </center>
        <center><h5 style={{color:'#95232A',marginTop:8,}}>Head-Teacher</h5></center>
        <center>
        <div className="speechline" ></div>
        </center>
        <p style={{fontSize:12,color:'whitesmoke',marginTop:9,}}>  We celebrate the values and heritage of Nigeria.
        We are committed to giving hope to the academically challenged child, as 
        <br/><h6 style={{float:'right',color:'#89C66C'}} >Mrs.Lord</h6></p>
       
      </div>
      </Col>
   </Row>
  </Container><br/>


   
   <Container fluid>
     <div  data-aos="fade-up"  className="video">
       <center>
         <div className="videotitle">
         <h6 style={{color:'#95232A',}} >Our purpose is to provide a <span style={{color:'#89C66C'}}>safe, happy environment</span> for your child, 
           where they are able to be themselves and thrive; 
           while acquiring the educational foundation needed to achieve Excellence</h6><hr/>
           </div>
       </center>
       <Row>
         <Col  sm={5} md={5} xs={12}>
         <div>
            <h6  style={{color:'#95232A',}}  >WHAT <span style={{color:'#89C66C',}} >WE STAND FOR</span></h6>
            <h6 style={{paddingLeft:10,}}><Lightbulb style={{color:'#95232A',}}/><b><span style={{fontSize:20,color:'#95232A'}}> Our Mission</span></b></h6>
            <div className="standquote">
            <p style={{color:'whitesmoke',fontSize:15,}}>Our mission is to raise future leaders and end time revivalists who are academically sound, emotionally stable and spiritually mature.</p>
            </div>

            <h6 style={{paddingLeft:10,}}><Lightbulb style={{color:'#95232A',}}/><b><span style={{fontSize:20,color:'#95232A'}}> Our Vission</span></b></h6>
            <div  className="standquote" >
            <p style={{color:'whitesmoke',fontSize:15, }}>To be a leading centre of academic and moral excellence like no other in Nigeria and Africa as a whole.</p>
            </div>


            <h6 style={{paddingLeft:10,}}><Lightbulb style={{color:'#95232A',}}/><b><span style={{fontSize:20,color:'#95232A'}}> Our Core Value</span></b></h6>
            <div  className="standquote">
            <ul style={{color:'whitesmoke',fontSize:15, }}>
              <li>Handworking</li>
              <li>Integrity</li>
              <li>Passion</li>
              <li>Intelligent</li>
            </ul>
            </div>

            
         </div>
         </Col>
         <Col  sm={7} md={7} xs={12}>
         <div>
         <iframe className="vid" src="https://player.vimeo.com/video/11204942?title=0&byline=0&portrait=0" title="vide0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
         </div>
         </Col>
       </Row>

     </div>
   </Container>

   <Container fluid>
     <div  data-aos="fade-up"  className="pride">
     <h4  style={{color:'#95232A',}}  ><b>What <span style={{color:'black',}} >makes us the best..</span></b></h4>
     <div className="speechlinex" ></div><br/>
       <Row>
         <Col  data-aos="fade-up"  xs={12} md={3}>
         <center>
         <div className="pridecircle"><br/><PersonFill style={{color:'#95232A',width:30,height:30,}}/></div>
         </center>
         <div className="pridebox"><br/>
           <center><h5  style={{color:'whitesmoke',}} ><b>Certified Teacher</b></h5></center>
           <p style={{color:'#89C66C',fontSize:14,}}>We are blessed with Highly Qualified teachers, Instructors 
             and Administrators with many years of professional 
             experience in teaching, learning and development of young ones</p>
         </div><br/>
         </Col>

         <Col  data-aos="fade-up"  xs={12} md={3}>
         <center>
         <div className="pridecircle"><br/><PersonFill style={{color:'#95232A',width:30,height:30,}} /></div>
         </center>
         <div className="pridebox"><br/>
           <center><h5  style={{color:'whitesmoke',}} ><b>Certified Teacher</b></h5></center>
           <p style={{color:'#89C66C',fontSize:14,}}>We are blessed with Highly Qualified teachers, Instructors 
             and Administrators with many years of professional 
             experience in teaching, learning and development of young ones</p>
         </div><br/>
         </Col>

         <Col  data-aos="fade-up"  xs={12} md={3}>
         <center>
         <div className="pridecircle"><br/><PersonFill style={{color:'#95232A',width:30,height:30,}} /></div>
         </center>
         <div className="pridebox"><br/>
           <center><h5  style={{color:'whitesmoke',}} ><b>Certified Teacher</b></h5></center>
           <p style={{color:'#89C66C',fontSize:14,}}>We are blessed with Highly Qualified teachers, Instructors 
             and Administrators with many years of professional 
             experience in teaching, learning and development of young ones</p>
         </div><br/>
         </Col>


         <Col  data-aos="fade-up"  xs={12} md={3}>
         <center>
         <div className="pridecircle"><br/><Building style={{color:'#95232A',width:30,height:30,}} /></div>
         </center>
         <div className="pridebox"><br/>
           <center><h5  style={{color:'whitesmoke',}} ><b>Creative Class</b></h5></center>
           <p style={{color:'#89C66C',fontSize:14,}}>Skills acquisition programme in: ICT (Website Design and Programming, Computer Analysis etc.), 
           Electrical work, Photography, Fabrics and Cloth Design, 
           Bead making, and Paper Craft</p>
         </div>
         </Col>
       </Row><br/><br/>


       <h4  style={{color:'#95232A',}}  ><b>What <span style={{color:'black',}} >our students says..</span></b></h4>
     <div className="speechlinex" ></div><br/>
     <Row>
       <Col  data-aos="fade-up" xs={12} md={4}>
        <div className="seniorquote">
          <p>My name is Adesola Temitope.My stay at HSS started with 
            my time in the reception class in junior school until graduated.  
            I have now spent roughly two years and half at Babcock University 
            and am now studying Computer Engineering. Thanks to 
            Hallmark Secondary School, Ondo<br/>
            <h6 style={{float:'right',}} >olayinka</h6>
          </p>

        </div>
       </Col>
       <Col  data-aos="fade-up" xs={12} md={4} >
       <div className="seniorquote">
          <p>My name is Adesola Temitope.My stay at HSS started with 
            my time in the reception class in junior school until graduated.  
            I have now spent roughly two years and half at Babcock University 
            <br/>
            <h6 style={{float:'right',}} >olayinka</h6>
          </p>
        </div>
        </Col>
       <Col  data-aos="fade-up" xs={12} md={4}>
       <div className="seniorquote">
          <p>My name is Adesola Temitope.My stay at HSS started with 
            my time in the reception class in junior school until graduated.  
            <br/>
            <h6 style={{float:'right',}} >olayinka</h6>
          </p>
        </div>
        </Col>     
      </Row>
      <br/><br/>


      <h4  style={{color:'#95232A',}}  ><b>The School <span style={{color:'black',}} >Anthem And Pledge..</span></b></h4>
     <div className="speechlinex" ></div><br/>
      <Row>
        <Col  data-aos="zoom-out" xs={12} md={5} >
          <center>
          <img alt="music" src={undraw1} style={{width:270,height:170}}/>
          </center>
        </Col>
        <Col  data-aos="fade-up" xs={12} md={7}>
          <div className="anthem">
            <h5 style={{color:'#89C66C',}}>Anthem</h5>
            <p>Bestfioundation our school, our own oo dear school ,
              our voices will rejoice in praise may 
              your glory so widening homwe, God bless our eacher 
              make in the dufference in acedemy, G od bless our school
              Bestfioundation our school, our own oo dear school ,
              our voices will rejoice in praise may 
              your glory so widening homwe, God bless our eacher 
              make in the dufference in acedemy, G od bless our school</p>
              <h5 style={{color:'#89C66C',}} >Pledge</h5>
            <p>Bestfioundation our school, our own oo dear school ,
              our voices will rejoice in praise may 
              your glory so widening homwe, God bless our eacher 
              make in the dufference in acedemy, G od bless our school
              Bestfioundation our school, our own oo dear school ,
              our voices will rejoice in praise may 
              your glory so widening homwe, God bless our eacher 
              make in the dufference in acedemy, G od bless our school</p>
          </div>
        </Col>
      </Row>

     </div>
   </Container><br/><br/><br/>


   <Container fluid>
     <div className="video">
       <Row>
         <Col  data-aos="fade-down" xs={12} md={4}>
           <div style={{lineHeight:'0.3',color:'white',paddingTop:46,}}>
             <center>
             <h1>Our Number</h1>
             <p>School(1) & School(2)</p>
             <div className="speechlinex" ></div><br/>
             </center>
           </div>
         </Col>
         <Col  data-aos="zoom-in" xs={12} md={4}>
           <div className="numberone"  >
           <center>
           <h5 style={{color:'white',}}>School-One</h5>
           <h2>Teachers: 25</h2>
           <h2>Students: 200</h2>
           </center>

           </div>
         </Col>
         <Col data-aos="zoom-in"  xs={12} md={4}>
         <div className="numberone" >
           <center>
           <h5 style={{color:'white',}}>School-Two</h5>
           <h2>Teachers: 25</h2>
           <h2>Students: 200</h2>
           </center>
           
          

           </div>
         </Col>
       </Row>

     </div>
   </Container>
 </div>
    );
  }




export default Landingpage;

