import React from 'react';

import "./PriceField.scss";

class PriceField extends React.Component {
    constructor(props) {
            super(props);
    this.state = {
        price:"",

        };
        
    }
    
        render() {
            console.log(this.props)
            return (
                
                
                    
                <input type="text" name="price" className="price"  placeholder="Select any service" disabled/>
                    

                    

            )

                       
                    
              
        
        }

}


export default PriceField;

