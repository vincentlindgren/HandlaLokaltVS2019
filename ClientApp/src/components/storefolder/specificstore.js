import React from 'react' 
import './index.css';
import Store from './Store';




function SpecificStore (props){
     const {name, type, photo, description} = props.storeObj;
      
     console.log(name, type, photo, description);
    
      return(
                <div className="TEST">
                    <h1> {props.storeObj.name}</h1>
                </div>     
      ); 
}

export default SpecificStore