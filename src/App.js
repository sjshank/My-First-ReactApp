import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ContactList from './contactList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Contact Manager</h1>
        </header>
        <div className="contact-list-section">
          <ContactList />
        </div>
      </div>
    );
  }
}

export default App;
