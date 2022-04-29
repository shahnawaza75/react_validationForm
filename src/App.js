import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Form Validation Demo</h2>
        </div>
        <Form />
        <h4>
          From <a style={{textDecoration: 'underline'}} href="https://cxl.com/blog/form-validation/#:~:text=Form%20validation%20is%20a%20%E2%80%9Ctechnical,by%20a%20user%20is%20correct.%E2%80%9D">The Validation Form</a>
        </h4>
      </div>
    );
  }
}

export default App;
