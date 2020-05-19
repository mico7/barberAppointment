import React from 'react';

import BarbersName from "../BarbersName/BarbersName.js";
import SelectService from "../SelectService/SelectService.js"

import "./FormInput.scss";

const FormInput = () => (
    <div className="FormInputContainer">
        <form>
            
                
            <input type="text" name="firstName" placeholder="First Name" required/>
            <input type="text" name="lastName" placeholder="Last Name"/>
            <br/><br/>
            <input type="email" name="email"  placeholder="Email" required/>
            <input type="text" name="firstName"  placeholder="Contact Number" required/>
            <BarbersName/>
            <SelectService/>
            

            
        </form>
        
     </div>
)
export default FormInput;