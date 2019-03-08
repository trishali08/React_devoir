import React, { Component } from 'react';
import Display from './Display';
import './index.css';

class App extends Component {
  render() {
    return (
      <div>
       <h1>Hi! I am React App!</h1>
       <button className='button-app'>Switch Users</button>
       <Display age='30'/>
       <Display age='26' />
      </div>
    );
  }
}

export default App;
