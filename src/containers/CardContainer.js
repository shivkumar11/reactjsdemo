import React from "react";
import { 
    Col,
    Card,
    Button
 } from "react-bootstrap";


const CardContainer = (props) => {
    
    return (
       
           <Col xs={12} md={4}>
           <Card>
  <Card.Img className="imgZoom" variant="top" src={props.img}/>
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
    {props.descp}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
          </Col>
         
        
    );
}
export default CardContainer;
