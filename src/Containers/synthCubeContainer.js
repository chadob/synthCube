import React from 'react';
import '../Styles/synthCube.css';
import { SynthCube } from '../Components/synthCube.js';
// cube defaults to being in the middle of the screen based off of lines 13, 14, 17, 18
const initialCubeSize = {height: 50, width: 50};
const initialStageSize = {height: 100, width: 100};
export class SynthCubeContainer extends React.Component {
  stringifyPosition(position) {
    return "calc(50% - " + position  + "px)";
  }
  render() {
    const time = this.props.time;
    const scale = this.props.scale;
    const width = initialCubeSize.width * this.props.scale;
    const height = initialCubeSize.height * this.props.scale;
    const vCenter = height / 2;
    const hCenter = width / 2;
    const positions = {left: {top: vCenter, left: (-1 *  width)}, middle: {top: vCenter, left: 0}, right: {top: vCenter, left: width}};
    return (
      <div>
        <SynthCube
          time={time}
          scale={scale}
          width={width}
          height={height}
          positions={positions} />
      </div>
    );
  }
}
