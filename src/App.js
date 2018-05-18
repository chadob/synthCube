import React, { Component } from 'react';
import './Styles/App.css';
import {SynthCubeBoxContainer} from './Containers/synthCubeBoxContainer';
import {StarsBoxContainer} from './Containers/starsBoxContainer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <StarsBoxContainer />
      </div>
    );
  }
}

export default App;
