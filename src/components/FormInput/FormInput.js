import React from 'react';


import BarbersName from "../BarbersName/BarbersName.js";
import SelectService from "../SelectService/SelectService.js"
import PriceField from "../PriceField/PriceField"

import "./FormInput.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Time from '../Time/Time.js';
import { withRouter } from 'react-router-dom';

class FormInput extends React.Component {
    constructor(props) {
            super(props);
    this.state = {
        firstName:"",
        lastName:"",
        email:"",
        contactNumber:"",
        barbersName:"",
        service:"",
        date:"",
        time:"",
        

        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});

    }

    handleSubmit = (e) => {

        e.preventDefault()
        const data = this.state;
        

        fetch("https://my-json-server.typicode.com/mitjaprasnikar/barberAppointment/appointments", {
            method:"POST",
            body:data,
        }).then(Response)

        this.props.history.push('/complete');
       
    }
        render() {
            
            return (

            <Container className="FormInputContainer">
                
                <form onSubmit={this.handleSubmit}>
                    
                    <Row>
                    <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} className="firstLast" value={this.state.firstName} required/>
                    <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} className="firstLast" value={this.state.lastName}/>
                    </Row>

                    <Row>
                    <input type="email" name="email"  placeholder="Email" onChange={this.handleChange} value={this.state.email} required/>
                    <input type="text" name="contactNumber" placeholder="Contact Number" onChange={this.handleChange}  value={this.state.contactNumber} required/>
                    </Row>
                    
                    <Row>
                    <select name="barbersName" onChange={this.handleChange} value={this.state.barbersName} required>
                        <option value="" selected disabled hidden>Select Barber</option>
                        <BarbersName />
                    </select>
                    
                    <select onChange={this.handleChange} value={this.state.service} name="service">
                        <option value="" selected disabled hidden>Select Service</option>
                        <SelectService />
                    </select>
                    </Row>


                    <Row>
                    <input type="date" name="date" placeholder="AA" onChange={this.handleChange} value={this.state.date} required/>
                    <select onChange={this.handleChange} value={this.state.time} name="time">
                        <option value="" selected disabled hidden>Select Time</option>
                        <Time/>
                    </select>
                    </Row>

                    <Row>
                        <PriceField price={this.state.service}/>
                    </Row>

                    <Row>
                    <input type="submit" className="submitBtn" value="BOOK APPOINTMENT" />
                    </Row>

                </form>
        
     </Container>
                
            )
    }
    
}
    
export default withRouter(FormInput);