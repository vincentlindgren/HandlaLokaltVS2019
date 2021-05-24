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
        super(props); 
       

        this.state = {
            isAuthenticated: false,
            userName: null,
        };
    };

    componentDidMount() {
        this._subscription = authService.subscribe(() => this.populateState());
        this.populateState();
    }

    componentWillUnmount() { 
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

   
    render() { 
        const { userName } = this.state;
        return this.authView(userName);
    }

    
          
         
    
    

    authView = (userName) => {
        const url =  '/api/createstore';
        return (
            <div className="myStoreMainDiv">
                <h2 className="MyStoreTitle"> Hello {userName}</h2>
                
            </div>
        );
    }

  
      


}