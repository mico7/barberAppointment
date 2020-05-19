import React from 'react';



import "./FormInput.scss";

const FormInput = () => (
    <div className="FormInputContainer">
        <form>
            
                
            <input type="text" name="firstName" classname="inputField" placeholder="First Name" required/>
            <input type="text" name="lastName" classname="inputField" placeholder="Last Name"/>
            <br/><br/>
            <input type="email" name="email" classname="inputField" placeholder="Email" required/>
            <input type="text" name="firstName" classname="inputField" placeholder="Contact Number" required/>
            

            
        </form>
        
     </div>
)
export default FormInput;