import React from 'react';

import "./SelectService.scss";


class SelectService extends React.Component {
    constructor(props) {
            super(props);
    this.state = {
        service:[{}],

        };
        
    }

    getServices = async() => {
                    let response = await fetch("https://my-json-server.typicode.com/mitjaprasnikar/barberAppointment/services");
                    let data = await response.json();

                    let services = data.map((x) => {
                            
                        const servicesInfo = {
                                name: x.name,
                                price: x.price,
                                duration: x.durationMinutes
                        }

                        return servicesInfo
                    });
                    
            this.setState({
              service: services})
    }
    componentDidMount() {
        this.getServices();
        
}
    
        render() {
            
            return (
                     this.state.service.map((x) => 
                        <option key={x.id} value={x.price}>
                                {x.name}
                        </option>   
            )
            
            )

        }

}


export default SelectService;