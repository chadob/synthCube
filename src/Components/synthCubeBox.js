import React from 'react';
import {SynthCubeContainer} from '../Containers/synthCubeContainer';

export class SynthCubeBox extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <div className="cube-box">
        <SynthCubeContainer />
      </div>
    );
  }
}
