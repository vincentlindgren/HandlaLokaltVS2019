import React, { Component, Fragment } from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import authService from './api-authorization/AuthorizeService';
import { ApplicationPaths } from './ApiAuthorizationConstants';


export class MyStore extends Component {
    static displayName = MyStore.name;

    constructor(props) {
        super(props); //"super refers to the parent class constuctor, i det här fallet: React.Component, 
        //MÅSTE ALLTID ha med "super(props)"!!!!! för att kunna använda sig av "this." Detta för att super constructorn behöver köras för att deniniera
        //vad "this" är för något. 
        
        };
    
    
   

    render() {
        return (
            <div>
                <h1> Hello {this.props.userName} </h1>
            </div>
        );
        
        
    }
}
    



