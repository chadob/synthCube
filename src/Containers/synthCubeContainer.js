import React from 'react';
import '../Styles/synthCube.css';
import { SynthCube } from '../Components/synthCube.js';

const initialSize = {height: 100, width: 100};
export class SynthCubeContainer extends React.Component {
  render() {
    const time = this.props.time;
    const scale = this.props.scale;
    const width = initialSize.width * this.props.scale;
    const height = initialSize.height * this.props.scale;
    return (
      <SynthCube time={time} scale={scale} width={width} height={height}/>
    );
  }
}
