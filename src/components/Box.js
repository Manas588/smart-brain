import React from "react";
import './Box.css';


const Box = ({ box}) => {
    
    if(box.toprow){
    return (
        <div>
           { box.toprow.map((b,i)=> {
               return (<div className="bounding-box" key={i}
                        style={{top: box.toprow[i], right: box.rightcol[i], bottom: box.bottomrow[i], left:box.leftcol[i]}}>      
                        </div>);
           })}
        </div>
    );
    } else {
        return <div></div>
    }
}
export default Box;