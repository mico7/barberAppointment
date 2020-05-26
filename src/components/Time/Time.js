import React from 'react';

import "./Time.scss";

class Time extends React.Component {
    /*constructor(props) {
            super(props);
    this.state = {
        barber:[],

        };
        
    }

    getBarbers = async() => {
                    let response = await fetch("https://my-json-server.typicode.com/mitjaprasnikar/barberAppointment/barbers");
                    let data = await response.json();
            this.setState({
                barber: data.map((barber) => 
                    
                        barber.firstName + " " + barber.lastName

                )  
                })
    }
    componentDidMount() {
        this.getBarbers();
}
    */
        render() {
            
            return (
                
                    

                       this.state.barber.map((x) => 
                        <option key={x} value={x}>
                                {x}
                        </option>
                    

                    

            ))

                       
                    
              
        
        }

}

     
    



    



    
    
export default Time;

