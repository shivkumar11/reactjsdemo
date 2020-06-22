import React from 'react';
import {
  Row,
  Col,
  Container,
  Form,
  Button
} from 'react-bootstrap';
const Newsletter = () => {

  return (
 
    <section style={{marginTop : '50px',
    backgroundImage: "url(./images/newsletter-bg.jpg)",
    backgroundSize: 'cover',
    height:'300px',
        marginBottom:'0px'}}>
     <Container>
     
      <Row>
      <Col md={12}>
      <h2 className="newsletterTxt" font-weight="bold">Newsletter Subscriber</h2>
      <p className="Text1">Get your tests delivered at let home collect sample from the victory 
      of the managements that supplies best.</p>

      </Col>
      <Col md={3}>
   
      </Col>
      <Col md={4}>
      <Form.Group controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" />
   
  </Form.Group>
      </Col>
      <Col md={2}>
      
  <Button variant="primary" type="submit">
    Subscribe Now
  </Button>
      </Col>
      <Col md={3}>
   
      </Col>
      </Row>
      </Container>
     
    </section>
  
     
  );
}

export default Newsletter;