import React from 'react';


import image from "./image.jpg";
import "./BarberImage.scss";

const BarberImage = () => (
    <div className="ImageContainer">
        <img src={image} alt="barber" className="cover"/>
        
     </div>
)
export default BarberImage;
