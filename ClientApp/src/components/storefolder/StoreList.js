import React from 'react';
import ReactDom from 'react-dom';
import {listamedbutiker} from './storedata'; 
import Store from './Store'



class StoreList extends React.Component{
    render(){
        return(
            <section className="slist">
        {listamedbutiker.map((storeObj)=>{
        console.log(storeObj);
        return (<Store key={storeObj.id} storeObj={storeObj}></Store>
        );      
    })}
    </section>
        )
    }
}


export default StoreList