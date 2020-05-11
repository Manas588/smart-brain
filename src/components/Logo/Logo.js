import React from "react";
import Tilt from 'react-tilt';
import './Logo.css'
import brain from './brain.png';

const Logo = () => {
    return (
        <div className="mt0">
            <Tilt className="Tilt ml3 br4 shadow-2" options={{ max : 60 }} style={{ height: 100, width: 100 }} >
                 <div className="Tilt-inner "><img style={{ width:'100px', height:"100px"}} alt="brain" src= {brain}/></div>
            </Tilt>
        
        </div>
        
    );
}
export default Logo;