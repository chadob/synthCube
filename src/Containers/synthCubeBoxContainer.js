import React from 'react';
import { SynthCubeBox } from '../Components/synthCubeBox.js';
import '../Styles/synthCubeBox.css';

export class SynthCubeBoxContainer extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <SynthCubeBox />
    );
  }
}
