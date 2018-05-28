import React, { Component } from 'react';
import './Styles/App.css';
import {SynthCubeBoxContainer} from './Containers/synthCubeBoxContainer';
import {StarsBoxContainer} from './Containers/starsBoxContainer';
import {MiddleDotContainer} from './Containers/middleDotContainer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <MiddleDotContainer />
        <StarsBoxContainer />
      </div>
    );
  }
}

export default App;
