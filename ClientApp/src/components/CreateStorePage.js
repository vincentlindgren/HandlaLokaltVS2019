import React, { Component, Fragment } from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import authService from './api-authorization/AuthorizeService';
import './MyStore2.css';




export class CreateStorePage extends Component {
    static displayName = CreateStorePage.name;

    constructor(props) {
        super(props); 


        this.state = {
            isAuthenticated: false,
            userName: null
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
            userName: user && user.name
        });
        console.log(user.name, user); 
    }


    render() { 
        const { userName } = this.state;
        return this.authView(userName);
    }

    authView(userName) {
        return (
            <div>
                <h2 className="MyStoreTitle"> Hello {userName}</h2>
                <h3 className="CreateStore"> Skapa en sida för din butik! </h3>
                    <div>
                        <label class="control-label" style="margin-top:1em;">Beskriv din butik: </label>
                        <textarea class="form-control" rows="5" style="resize:none;" ></textarea>
                    </div>
            </div>
        );
    }


}




