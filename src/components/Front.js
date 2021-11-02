import React from 'react';
import image from ".././images/image1.jpg";

const Front = () => {
    return(<img src={image} alt="image" style={{objectFit:"cover"}}></img>);
}

export default Front;