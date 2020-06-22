import React from "react";
import { 
    Row,
    Container
 } from "react-bootstrap";
 import CardContainer from "./CardContainer";


const Services = () => {
    
    return (
        <section style={{marginTop : '50px', marginBottom:'50px'}}>
       <Container>
       <h2 style={{textAlign: 'center'}}>Welcome to our website</h2>
       <p>Get your tests delivered at let home collect sample from the victory 
      of the managements that supplies best.
      Get your tests delivered at let home collect sample from the victory 
      of the managements that supplies best.</p>

    <Row>
    <CardContainer img="./Images/2.jpg" title='Title 1' descp="1 Some quick example text to build on the card title and make up the bulk of
      the card's content." />  
    <CardContainer img="./Images/3.jpg" title='Title 2' descp="2 Some quick example text to build on the card title and make up the bulk of
      the card's content." /> 
    <CardContainer img="./Images/2.jpg" title='Title 3' descp="3 Some quick example text to build on the card title and make up the bulk of
      the card's content."/>  
    </Row>
    </Container>
    </section>
        
    );
}
export default Services;
