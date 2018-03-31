import React from 'react';
import '../Styles/synthCube.css';
import { SynthCube } from '../Components/synthCube.js';

export class SynthCubeContainer extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <SynthCube />
    );
  }
}
