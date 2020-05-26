import React from 'react';

import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import image from "./image.jpg";
import "./BarberImage.scss";

const BarberImage = () => (
    
        <Container className="imageContainer">
                <Row>
                <Col >
                        <Image src={image} alt="barber" className="cover"/>
                </Col>
                    
                </Row>
        </Container>
   
)
export default BarberImage;
