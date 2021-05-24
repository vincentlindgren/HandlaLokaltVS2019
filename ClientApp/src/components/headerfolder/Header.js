
import React, {Component} from 'react' 
import './header.css'
import HeaderPhoto from './hlogo2.png';


const Header = () => {
    return (
        <div id="headerid">
            <header>
                <img className="headerlogo" src={HeaderPhoto}></img>
             </header>
        </div>
    )
}

export default Header;
