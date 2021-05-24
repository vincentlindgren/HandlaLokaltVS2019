import React, { Component, Fragment } from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import authService from './AuthorizeService';
import { ApplicationPaths } from './ApiAuthorizationConstants';

export class LoginMenu extends Component {
    constructor(props) {
        super(props); //"super refers to the parent class constuctor, i det här fallet: React.Component, 
        //MÅSTE ALLTID ha med "super(props)"!!!!! för att kunna använda sig av "this." Detta för att super constructorn behöver köras för att deniniera
        //vad "this" är för något. 

        this.state = {
            isAuthenticated: false,
            userName: null
            
        };
    }

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
            userName: user && user.name
        });
    }

    render() {
        const { isAuthenticated, userName } = this.state;
        if (!isAuthenticated) {
            const registerPath = `${ApplicationPaths.Register}`;
            const loginPath = `${ApplicationPaths.Login}`;
            return this.anonymousView(registerPath, loginPath);
            //Detta if-statement kallar på metoden nedan "anonymousView som returnerar "registerPath" och "loginPath"
        } else {
            const profilePath = `${ApplicationPaths.Profile}`;
            const logoutPath = { pathname: `${ApplicationPaths.LogOut}`, state: { local: true } };
            const myStorePath = `${ApplicationPaths.MyStore2}` ; //Fortsätt här!
            return this.authenticatedView(userName, profilePath, logoutPath, myStorePath); //Detta else-statement kallar på metoden nedan "authenticatedView"
            //och skickar med parametrarna userName, profilePath, logoutPath.
        }
    }

    //Kod som renderar "Hello test1@test.se" & "Logout" i navbar
    authenticatedView(userName, profilePath, logoutPath, myStorePath) {
        return (<Fragment>

            <NavItem>
                <NavLink tag={Link} className="text-dark" to={profilePath}>Hello {userName}</NavLink>
            </NavItem>

            <NavItem>
                <NavLink tag={Link} className="text-dark" to={logoutPath}>Logout</NavLink>
            </NavItem>

            <NavItem>
                <NavLink tag={Link} className="text-dark" to={myStorePath}>Min butik</NavLink>
            </NavItem>

        </Fragment>);

    }

    //Kod som renderar "Register" & "Logout" i navbar
    anonymousView(registerPath, loginPath) {
        return (<Fragment>
            <NavItem>
                <NavLink tag={Link} className="text-dark" to={registerPath}>Register</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} className="text-dark" to={loginPath}>Login</NavLink>
            </NavItem>
        </Fragment>);
    }
}
