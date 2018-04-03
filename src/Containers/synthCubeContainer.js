import React from 'react';
import '../Styles/synthCube.css';
import { SynthCube } from '../Components/synthCube.js';
// cube defaults to being in the middle of the screen based off of lines 13, 14, 17, 18
const initialCubeSize = {height: 50, width: 50};

export class SynthCubeContainer extends React.Component {
  render() {
    const time = this.props.time;
    const scale = this.props.scale;
    const positions = this.props.positions;
    const left = this.props.positions[this.props.number].left;
    const top = this.props.positions[this.props.number].top;
    const width = this.props.width;
    const height = this.props.height;
    return (
      <div>
        <SynthCube
          time={time}
          scale={scale}
          width={width}
          height={height}
          top={top}
          left={left}
          positions={positions} />
      </div>
    );
  }
}
