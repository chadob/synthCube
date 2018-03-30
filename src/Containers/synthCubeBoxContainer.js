import React from 'react';
import ReactDOM from 'react-dom';
import {SynthCubeContainer} from './synthCube';

class SynthCubeBoxContainer extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <div>
        <SynthCubeContainer />
        <SynthCubeContainer />
        <SynthCubeContainer />
      </div>
    );
  }
}
ReactDOM.render(<SynthCubeBoxContainer />, document.getElementByClassName('App'));
