import React from 'react';
import {
  Row,
  Col,
  Container,
  Image
} from 'react-bootstrap';
import { 
Link
} from 'react-router-dom'; 



const Aboutdesc = () => {


  return (
 
    <section  style={{marginTop: "100px"}}>
     <Container>
     
      <Row>
      <Col md={6}>
      <h2 className="animate__animated animate__zoomIn" font-weight="bold">Built your business with a website</h2>
      <p className="Text">Get your tests delivered at let home collect sample from the victory 
      of the managements that supplies best.
      Get your tests delivered at let home collect sample from the victory 
      of the managements that supplies best.Get your tests delivered at let home collect sample from the victory 
      of the managements that supplies best.
      Get your tests delivered at let home collect sample from the victory 
      of the managements that supplies best.</p>

      <Link className="btnLink float-left" To="#"> Read more </Link>
     
       
      
   
    
      </Col>
      <Col md={6}>
      <Image className="animate__animated animate__slideInRight" src="./Images/bg1.png" />

      </Col>

      </Row>
      <Row>
      <Col md={6}>
      <Image className="animate__animated animate__slideInLeft"  src="./Images/bg1.png" />

      </Col>
      <Col md={6}>
      <h2 className="animate__animated animate__zoomIn" font-weight="bold">Built your business with a website</h2>
      <p className="Text">Get your tests delivered at let home collect sample from the victory 
      of the managements that supplies best.
      Get your tests delivered at let home collect sample from the victory 
      of the managements that supplies best.Get your tests delivered at let home collect sample from the victory 
      of the managements that supplies best.
      Get your tests delivered at let home collect sample from the victory 
      of the managements that supplies best.</p>
      <Link className="btnLink float-left" To="#"> Read more </Link>
   
    
      </Col>
      

      </Row>
      </Container>
     
    </section>
  
     
  );
}

export default Aboutdesc;