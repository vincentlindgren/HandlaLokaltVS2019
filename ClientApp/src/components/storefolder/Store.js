import React from 'react' 
import './index.css';
import SpecificStore from './specificstore';


const Store = (props) =>{
    

    const {name, type, photo, description} = props.storeObj;
        return (
            <article className="storearticle">
                <h2 className="storecomptitle" onClick={() => console.log(name)}>{name}</h2>
                    <div className="storecomp">
                        <img className="indexstorephoto" src={photo} alt=""></img> 
                             <h4 className="storetype">{type}</h4>
                    <a className="storedescription"> {description} </a>
                    <button type="button"> Knapp 1 </button>
                    <button type="button"> Knapp 2 </button>
                    </div>
            </article>
    )
};

export default Store







//Kod som ännu inte används men som i en senare iteration kan vara till nytta, därav ej bortstädad.
//const clickHandler = (props) => {
//    SpecificStore(props);
//    console.log(name);
//};


//const secondClickHandler = (props) => {

//    SpecificStore(props);
//};