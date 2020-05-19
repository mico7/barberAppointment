import React from 'react';

import "./SelectService.scss";

class SelectService extends React.Component {
    constructor(props) {
            super(props);
    this.state = {
        service:null,

        };
        
    }

    getServices = async() => {
                    let response = await fetch("https://my-json-server.typicode.com/mitjaprasnikar/barberAppointment/services");
                    let data = await response.json();
            this.setState({
                service: data.map((service) => 
                    
                        <option value={service.name} > {service.name} </option>

                )  
                })
    }
    componentDidMount() {
        this.getServices();
}
    
        render() {
            
            return (
                <div className="ServiceOption">
                    <select className="Service">
                            {this.state.service}

                        </select>
                    
               </div>
            )
        }

}


export default SelectService;