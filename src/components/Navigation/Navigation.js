import React from "react";
import './Navigation.css';

const Navigation = ({issignedin ,onclick}) => {
    if (issignedin === 'home'){
        return (
            <nav style={{display:'flex', justifyContent:'flex-end'}} >
                <p  onClick={()=>onclick('signin')}  className='pos f4 underline link dim pa2 pointer'><strong>Sign Out</strong></p>
            </nav>
            
        );
    } else {
        return (
            <nav style={{display:'flex', justifyContent:'flex-end'}} >
                <p onClick={()=>onclick('signin')} className='pos f4 underline link dim pa2 pointer'><strong>Sign In</strong></p>
                <p onClick={()=>onclick('register')} className='pos f4 underline link dim pa2 pointer'><strong>Register</strong></p>
            </nav>
            
        );
    }
  
}
export default Navigation;