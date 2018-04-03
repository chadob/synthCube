import React from 'react';
import '../Styles/synthCubeStage.css';
import { SynthCubeStage } from '../Components/synthCubeStage.js';

const initialStageSize = {height: 100, width: 100};

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
    return (
      <div>
        <SynthCubeStage
          time={time}
          scale={scale}
          stageTop={this.stringifyPosition(stageTop)}
          stageLeft={this.stringifyPosition(stageLeft)}
          stageWidth={stageWidth}
          stageHeight={stageHeight} />
      </div>
    );
  }
}
