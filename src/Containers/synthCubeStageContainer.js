import React from 'react';
import '../Styles/synthCubeStage.css';
import { SynthCubeStage } from '../Components/synthCubeStage.js';

const initialStageSize = {height: 100, width: 100};
const initialCubeSize = {height: 50, width: 50};
export class SynthCubeStageContainer extends React.Component {
  stringifyPosition(position) {
    return "calc(50% - " + position  + "px)";
  }
  render() {
    const time = this.props.time;
    const scale = this.props.scale;
    const stageWidth = initialStageSize.width * this.props.scale;
    const stageHeight = initialStageSize.height * this.props.scale;
    const stageTop = stageWidth / 2;
    const stageLeft = stageHeight / 2;
    const cubeWidth = initialCubeSize.width * this.props.scale;
    const cubeHeight = initialCubeSize.height * this.props.scale;
    const positions = {
      left: {
        top: (this.stringifyPosition(cubeHeight / 2)),
        left: this.stringifyPosition(cubeWidth + (-1 * cubeWidth))},
      middle: {
        top: (this.stringifyPosition(cubeHeight / 2)),
        left: this.stringifyPosition(cubeWidth + 0)},
      right: {
        top: (this.stringifyPosition(cubeHeight / 2)),
        left: this.stringifyPosition(cubeWidth + cubeWidth)}
    };
    return (
      <div>
        <SynthCubeStage
          time={time}
          scale={scale}
          stageTop={this.stringifyPosition(stageTop)}
          stageLeft={this.stringifyPosition(stageLeft)}
          stageWidth={stageWidth}
          stageHeight={stageHeight}
          cubeWidth = {cubeWidth}
          cubeHeight = {cubeHeight}
          positions = {positions} />
      </div>
    );
  }
}
