import React from 'react';

import "./BarbersName.scss";

class BarbersName extends React.Component {
    constructor(props) {
            super(props);
    this.state = {
        barber:null,

        };
        
    }

    getBarbers = async() => {
                    let response = await fetch("https://my-json-server.typicode.com/mitjaprasnikar/barberAppointment/barbers");
                    let data = await response.json();
            this.setState({
                barber: data.map((barber) => 
                    
                        <option value={barber.firstName} > {barber.firstName + " " + barber.lastName} </option>

                )  
                })
    }
    componentDidMount() {
        this.getBarbers();
}
    
        render() {
            
            return (
                <div className="BarbersOption">
                    <select className="Barbers">
                            {this.state.barber}

                        </select>
                    
               </div>
            )
        }

}

     
    



    



    
    
export default BarbersName;

