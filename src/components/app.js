import React, { Component } from 'react';
import Navbar from './navbar';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        { this.props.children }
        <a href="#" className="btn btn-outline-secondary btn-lg up-arrow" role="button">&uarr;</a>
      </div>
    );
  }
}
