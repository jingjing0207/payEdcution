import React, { Component } from 'react';
import SwitchCom from './router/index'
import './App.css';
import './../node_modules/video-react/dist/video-react.css'
class App extends Component {
  render() {
    return (
      <div className="App">
          <SwitchCom/>
      </div>
    );
  }
}

export default App;
