import React from 'react';
import ReactDom, { render } from 'react-dom';
import {listamedbutiker} from '../storefolder/storedata'; 
// import Store from '../Store';
import Store from '../storefolder/Store'
import '..../index.css';
import SearchBar from '../searchbarfolder/searchbar'




function Boutiques(props){
    return(   
        <React.Fragment>
            
    <section className="slist">
        
        {listamedbutiker.map((storeObj)=>{
            console.log(storeObj);
                if(storeObj.type == 'Butik'){
                    return (
                        <Store key={storeObj.id} storeObj={storeObj}></Store>
                    );  
                }
    })}
    </section>
    </React.Fragment> 
    ) 
}


export default Boutiques