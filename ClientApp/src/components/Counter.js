import React, { Component } from 'react';
import SearchBar from './searchbarfolder/SearchBar'



export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  render() {
    return (
        <div>
            <SearchBar/> {/* <<<----RIKTIG KOD*/}
      </div>
    );
  }
}
