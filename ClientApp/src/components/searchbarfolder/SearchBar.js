import React, { useState, useEffect } from 'react';

import Store from '../storefolder/Store'
import './searchbarstyling.css'
import { listamedbutiker } from '../storefolder/storedata';





function SearchBar(props) {

    const [searchWord, setSearchWord] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    /*const [navChosen, setNavChosen] = useState('');*/
    //navChosen BEHÖVS OM VI VÄLJER ATT KÖRA SAMMA NAV SOM I VISUAL STUDIO CODE-PROJEKTET

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchWord(e.target.value)
    }


    //DENNA FUNCTION KAN BEHÖVAS OM VI VÄLJER ATT KÖRA SAMMA NAV SOM I VISUAL STUDIO CODE-PROJEKTET
    //function handleNavChoice(navChosen) {
    //    console.log(navChosen);
    //    setNavChosen(navChosen);
    //}


    //DENNA useEffect ÄR METODEN SOM I REALTID KOLLAR IGENOM DATAN (LISTAN MED BUTIKER) OCH 
    //FILTRERAR UT DE SOM STÄMMER ÖVERENS MED SÖKORD SOM LÄGGS TILL I EN ARRAY SOM HETER "const result"
    useEffect(() => {
        const result = listamedbutiker.filter(store =>
            store.type.toLowerCase().includes(searchWord)
            || store.type.includes(searchWord)
            || store.name.includes(searchWord)
        );

        setSearchResult(result);
    }, [searchWord]);


    return (
            <div>
                <div className="searbardiv">
                    <input className="searchbar"
                        type='text'
                        key="searchKey"
                        value={searchWord}
                        onChange={handleSubmit}
                    >
                    </input>
                </div>  

                {/*DET SOM HÄNDER I DENNA <section> ÄR ATT DEN RETURNERAR ETT BUTIKS-KOMPONENT*/}
                {/*FÖR VARJE OBJECT I DEN STATE SOM ÄR SPARAD EFTER ATT UseEffect HAR KÖRTS*/}
                <section className="slist">
                    {searchResult.map(storeObj => (
                        <div>
                            <Store key={storeObj.id} storeObj={storeObj}></Store> 
                        </div>
                    ))}
                </section>
            </div >    
     )
        



}

export default SearchBar;