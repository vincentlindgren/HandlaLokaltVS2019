import React, {useState} from 'react';
import ReactDom from 'react-dom';
import {listamedbutiker} from '../storefolder/storedata'; 
// import Store from '../Store';
import './inloggform.css'



    const MyStore = () => {
        // const [userName, setUserName] = useState('')
        // const [password, setPassword] = useState('')

        const [user, setUser] = useState({userName: "", password: ""});

    const handleChange = (e) =>{
        const inputName = e.target.name;
        const inputValue = e.target.value;
        setUser({...user, [inputName]: inputValue})
        console.log(inputName, inputValue);
    };

    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(user.userName && user.password){
                    //skriv kod för att logga in här!!!!
                    console.log(user.userName, user.password);
        }
    }
        return(
            <React.Fragment>
                    <article className="inlogarticle">
                        <form className="inloggForm" onSubmit={handleSubmit}>
                            <div className="inloggformdiv">
                                <label className="formlabel" htmlFor="userName"> E-mail: </label>
                                
                                
                                <div className="inputbox">
                                   <input type="text" 
                                name="userName" 
                                id="userName" 
                                value={user.userName} onChange={handleChange} /> 
                                </div>
                            </div>

                            <div className="inloggformdiv">
                               <label className="formlabel" htmlFor="password"> Lösenord: </label>
                               <div className="inputbox">
                                <input type="password" 
                                name="password" 
                                id="password" 
                                value={user.password}
                                onChange={handleChange}/>
                                </div>
                            </div>
                            
                                <button className="btn" type="submit" onClick={handleSubmit}> Logga in </button>
                            
                            
                        </form>
                    </article>

            </React.Fragment>
        );

    }


    




export default MyStore