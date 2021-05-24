import React, { Component, Fragment } from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import authService from './api-authorization/AuthorizeService';
import './MyStore2.css';
import { CreateStorePage } from './CreateStorePage';
import { Route } from 'react-router';




export class MyStore2 extends Component {
    static displayName = MyStore2.name;

    constructor(props) {
        super(props); //"super refers to the parent class constuctor, i det här fallet: React.Component, 
        //MÅSTE ALLTID ha med "super(props)"!!!!! för att kunna använda sig av "this." Detta för att super constructorn behöver köras för att deniniera
        //vad "this" är för något. 

        this.state = {
            isAuthenticated: false,
            userName: null,
        };
    };

    componentDidMount() {
        this._subscription = authService.subscribe(() => this.populateState());
        this.populateState();
    }

    componentWillUnmount() { //Fattar inte vad denna gör?
        authService.unsubscribe(this._subscription);
    }

    async populateState() {
        const [isAuthenticated, user] = await Promise.all([authService.isAuthenticated(), authService.getUser()])
        this.setState({
            isAuthenticated,
            userName: user && user.name,
            userID: user && user.userID

        });
        console.log(user.name); //kan logga user OBJ 
    }

   
    render() { //Här behövs en IF() som verifierar att isAuthenticated är true och att username inte är null!!!!!
        const { userName } = this.state;
        return this.authView(userName);
    }

    
          
         
    
    

    authView = (userName) => {
        const url =  '/api/createstore';
        return (
            <div className="myStoreMainDiv">
                <h2 className="MyStoreTitle"> Hello {userName}</h2>
                <h3 className="MyStoreTitle"> test rendera 2st titlar </h3>
                <div>
                    <button btn-primary onClick={() => url }> hej</button>

                    </div>
            </div>
        );
    }

  
      


}