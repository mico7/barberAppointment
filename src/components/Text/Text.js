import React from 'react'
import "./Text.scss";


import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


const Text = () => (
   <Container>
      <Row>
         <span className="heading"> BOOK YOUR BARBER </span>
      </Row>
      
      <Row>
         <span className="subHeading">Great Hair Doesn’t Happen By Chance. It Happens By Appointment! </span> 
      </Row>

      <Row>
         <span className="subHeading1">So Don't Wait And Book Your Appointment Now!</span>
      </Row>

            </Container>
)
export default Text;