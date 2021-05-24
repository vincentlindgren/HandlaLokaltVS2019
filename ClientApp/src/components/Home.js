import React, { Component } from 'react';
import './HomeCSS.css';
import SearchBar from './searchbarfolder/SearchBar'


export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <SearchBar/>
        
      </div>
    );
  }
}




