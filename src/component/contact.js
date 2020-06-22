import React, {useEffect} from 'react';
import ValidationSchemaExample from './contact-validators';
import {
  Row,
  Col,
  Container,
  Jumbotron,
  Image
} from 'react-bootstrap';
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (

    <section>
     
      <Jumbotron>
      <Container>
     
     <Row>
     <Col md={12}>
  <h1 className="head2">Contact Us</h1>

  </Col>
      
      </Row>
      </Container>
     
</Jumbotron>   


<Container>
     
      <Row>
      <Col md={5}>
      <h2 className="animate__animated animate__zoomIn">Contact Form</h2>
     
      
     <ValidationSchemaExample />
   
    
      </Col>
      <Col md={7}>
      <Image className="animate__animated animate__slideInRight" src="./images/contact-us.png" />

      </Col>

      </Row>

      </Container>

    </section>

     
  );
}

export default Contact;