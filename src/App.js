import React, { Component } from 'react';
import './Styles/App.css';
import {SynthCubeBoxContainer} from './Containers/synthCubeBoxContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SynthCubeBoxContainer />
      </div>
    );
  }
}

export default App;
