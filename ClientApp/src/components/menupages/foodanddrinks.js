import React from 'react';
import ReactDom from 'react-dom';
import {listamedbutiker} from '../storefolder/storedata'; 
import Store from '../storefolder/Store'
import '../index.css';

// class FoodAndDrinks extends React.Component{
//     render(){
//         return(
//             <section className="slist">
//         {listamedbutiker.map((storeObj)=>{
//         console.log(storeObj);
//             if(storeObj.type == 'Restaurang'){
//                 return (
//                     <Store key={storeObj.id} storeObj={storeObj}></Store>
//         );  
//             } 
//     })}
//     </section>
//         )
//     }
// }

function FoodAndDrinks(){
return(
        <section className="slist">
            {listamedbutiker.map((storeObj)=>{
                console.log(storeObj);
                
                if(storeObj.type == 'Restaurang'){
                    return (
                        <Store key={storeObj.id} storeObj={storeObj}></Store>
            );  
                } 
    })}
    </section>
        )

}


export default FoodAndDrinks