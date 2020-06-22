import React, {useEffect} from 'react';
import {
  Row,
  Col,
  Container,
  Jumbotron
} from 'react-bootstrap';
import Aboutdesc from '../containers/Aboutdesc';
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
   
    <section>
     
      <Jumbotron>
      <Container>
     
     <Row>
     <Col md={12}>
  <h1 className="head2">About Us</h1>

  </Col>
      
      </Row>
      </Container>
     
</Jumbotron>
<Aboutdesc />
   
    </section>

     
  );
}

export default About;