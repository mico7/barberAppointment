import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import "./Form.scss";
import FormInput from '../FormInput/FormInput';

const Form = () => (
    <Container className="formContainer">
        <Row>
                
            <span className="FormHeading">BOOK YOUR APPOINTMENT</span>
            
        </Row>
        <Row>
            <Col >
                <FormInput/>
            </Col>
        </Row>
        </Container>
)
export default Form;
