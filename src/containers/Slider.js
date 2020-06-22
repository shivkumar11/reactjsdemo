import React from 'react';
import 'animate.css';
import {
  Row,
  Col,
  Container,
  Image
} from 'react-bootstrap';
import { 
  Link
  } from 'react-router-dom'; 

const Navigation = () => {
  const imgBg = {
    width: '100%',
    height: 'auto'
  };

  return (
 
    <section>
     <Container>
     
      <Row style={{marginTop: "100px"}}>
      <Col md={6}>

     


      <h2>Built your business with a website</h2>
      <p class="Text">Get your tests delivered at let home collect sample from the victory 
      of the managements that supplies best.
      Get your tests delivered at let home collect sample from the victory 
      of the managements that supplies best.</p>

          <Link className="btnLink float-left animate__animated animate__bounceIn" To="#">  know more about  </Link>
    
      </Col>
      <Col md={6}>
    
      <Image className="animate__animated animate__fadeInRight" style={imgBg}   src="./Images/bg.png" />

      </Col>

      </Row>
      </Container>
     
    </section>
   
  
     
  );
}

export default Navigation;