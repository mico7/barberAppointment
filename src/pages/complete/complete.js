import React from "react";

import "./complete.scss"


class Complete extends React.Component {
    constructor(props) {
            super(props);
    this.state = {
        gifs:[],

        };
        
    }

    

getGif = async() => {
    let response = await fetch("http://api.giphy.com/v1/gifs/search?api_key=KeTn0RgXZQF8EDkUGgQmSaJYuWPEz5mI&q=barber");
    let data = await response.json();
    
    
    const gifsArr = [];
    data.data.map((x) => {
        
        gifsArr.push(x.embed_url)
    })

    this.setState({
        gifs: gifsArr})
}

randomNumber = () => {
    const number =  Math.floor(Math.random() * this.state.gifs.length);
    return number
}

componentDidMount() {
    this.getGif();
    
}


render() {
    return(
    <div className="completeContainer">
        <span className="completeText">Appointment successfully booked</span>
       
        <iframe src={this.state.gifs[this.randomNumber()]} title="barberGif" width="300" height="300" classname="gif"/>
    </div>
)

    }
}

export default Complete;