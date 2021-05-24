import React from 'react';
import ReactDom from 'react-dom';
import {listamedbutiker} from '../storefolder/storedata'; 
import Store from '../storefolder/Store'
import '../index.css';


class GarageAndService extends React.Component{
    constructor(props){
        super(props);
        this.state= props.state;
    }
    
    render(){
        return(
            <section className="slist">
        {listamedbutiker.map((storeObj)=>{
        console.log(storeObj);
            if(storeObj.type == 'Verkstad'){
                return (
                    <Store key={storeObj.id} storeObj={storeObj}></Store>
        );  
            } 
    })}
    </section>
        );
    }
}

export default GarageAndService;