import React from 'react';
import {
  Navbar,
  Container,
  Row,
  Col

} from 'react-bootstrap';
import { 
  Link
  } from 'react-router-dom'; 
const Header = () => {


  return (
    <section className="animate__animated animate__backInDown" style={{
      position: 'fixed',
      left: '0',
      top: '0',
      backgroundColor: 'white',
      width: '100%',
      zIndex: 999,
      boxShadow: '0 1px 1px rgba(0,0,0,.1)',
}}>
       <Container>
    <Row>
      <Col xs={12} md={12}>
      <Navbar expand="lg">
      <Navbar.Brand>
      <Link className="nav-link" to="/">
      <img
        src="./Images/logo.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About Us</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contact">Contact Us</Link>
        </li>
      </ul>
    </Navbar.Collapse>
  </Navbar>
      </Col>
      </Row>
      </Container>
    </section>
   
  
     
  );
}

export default Header;