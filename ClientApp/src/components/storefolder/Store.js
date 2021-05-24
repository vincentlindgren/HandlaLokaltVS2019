import React from 'react' 
import './index.css';
import SpecificStore from './specificstore';


const Store = (props) =>{
    const clickHandler = (props) => {
        SpecificStore(props);
        console.log(name);
    };


        const complexExample = (props)=>{
            
            SpecificStore(props);
        };

    const {name, type, photo, description} = props.storeObj;
    return (
    <article className="storearticle">
        <h2 className="storecomptitle" onClick={() => console.log(name)}>{name}</h2>
        <div className="storecomp">
        <img className="indexstorephoto" src={photo} alt=""></img> 
     {/* //className="dettanamnalltså" -måste vara små bokstäver */}
        <h4 className="storetype">{type}</h4>
        <a className ="storedescription"> {description} </a>
        <button type="button" onClick={clickHandler(props)}> test </button>
        <button type="button" onClick={() => SpecificStore(props)}> DEN HÄR KNAPPEN </button>
        </div>
    </article>
    )
};

export default Store
