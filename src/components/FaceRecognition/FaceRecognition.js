import React from "react";
import './FaceRecognition.css';

const FaceRecognition = ({box, imageURL}) => {
    return (
        <div className="center ma">
            <div className="absolute mv2">
                <img className="br2 shadow-2" id='image' src={imageURL} alt='' width='500px' height='auto'/>
                <div className="bounding-box" style={{top: box.toprow, right: box.rightcol, bottom: box.bottomrow, left:box.leftcol}}></div>
            </div>
        </div>
        
    );
}
export default FaceRecognition;