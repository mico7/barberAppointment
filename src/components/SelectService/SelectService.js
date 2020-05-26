import React from 'react';

import "./SelectService.scss";

class SelectService extends React.Component {
    constructor(props) {
            super(props);
    this.state = {
        service:[],

        };
        
    }

    getServices = async() => {
                    let response = await fetch("https://my-json-server.typicode.com/mitjaprasnikar/barberAppointment/services");
                    let data = await response.json();
            this.setState({
                service: data.map((x) => 
                    
                        x.name

                )  
                })
    }
    componentDidMount() {
        this.getServices();
}
    
        render() {
            
            return (
   

                       this.state.service.map((x) => 
                        <option key={x} value={x}>
                                {x}
                        </option>

            ))

        }

}


export default SelectService;