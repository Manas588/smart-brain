import React from "react";
import './FaceRecognition.css';
import Box from '../Box';

const FaceRecognition = ({messageDisplay, box, imageURL}) => {
    
    return (
        <div className="center ma">
            <div className="absolute mv2">
                <div className="f3 yellow">{messageDisplay}</div>
                <img className="br2 shadow-2" id='image' src={imageURL} alt='' width='500px' height='auto'/>
                 <Box box= {box}/>
               
            </div>
        </div>
        
    );
}
export default FaceRecognition;