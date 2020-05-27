import React from 'react';

import "./PriceField.scss";

class PriceField extends React.Component {
    constructor(props) {
            super(props);
    
            this.state = {
                price:this.props.price,

        };
        
    }

    checkPrice = () => {
        
        if(this.props.price === "") {
            return <input type="text" name="price" className="price"  placeholder="Select any service" disabled/>
        } else {
            return <input type="text" name="price" className="price"  placeholder={"Price is " + this.props.price + "€"} disabled/>
        }
    }
    
        render() {
            
            return (
                
                
                  
                    
                       this.checkPrice()

                      )

                    }
                  
                
            
                
                    

                    

                      }

                       
                    
              
        
        




export default PriceField;

