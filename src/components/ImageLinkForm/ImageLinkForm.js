import React from "react";
import './ImageLinkForm.css'
const ImageLinkForm = ({onInputChange, onButtonClick}) => {
    return (
       <div className="pa3">
           <p className="f5 center white">
               {"Enter Your Image URL here. Smart Brain will detect faces in the image."}
               <br/>
                {"Give it a try :)"} 
           </p>
           <div className='bw1 b--white-60'>
           <div className=' back center'>
                <div className="center  form pa4 br3 shadow-5">
                    <input className='br2 shadow-5 bw0 f5 pa2 center w-70' type='text' onChange={onInputChange}/>
                    <button 
                    onClick={onButtonClick}
                    className='center grow shadow-5 br2 bw0 w-30 f5 link ph3 pv dib white bg-purple'>
                    Detect
                    </button>
          
                </div>
            </div>
            </div>
       </div>
    );
}
export default ImageLinkForm;