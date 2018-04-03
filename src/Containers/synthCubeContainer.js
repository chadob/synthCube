import React from 'react';
import '../Styles/synthCube.css';
import { SynthCube } from '../Components/synthCube.js';
// cube defaults to being in the middle of the screen based off of lines 13, 14, 17, 18
const initialCubeSize = {height: 50, width: 50};
const initialStageSize = {height: 100, width: 100};
export class SynthCubeContainer extends React.Component {
  render() {
    const time = this.props.time;
    const scale = this.props.scale;
    const width = initialCubeSize.width * this.props.scale;
    const height = initialCubeSize.height * this.props.scale;
    const top = "calc(50% - " + (width / 2) + "px)";
    const left = "calc(50% - " + (height / 2) + "px)";
    const stageWidth = initialStageSize.width * this.props.scale;
    const stageHeight = initialStageSize.height * this.props.scale;
    const stageTop = "calc(50% - " + (stageWidth / 2) + "px)";
    const stageLeft = "calc(50% - " + (stageHeight / 2) + "px)";
    return (
      <SynthCube time={time} scale={scale} width={width} height={height} top={top} left={left} stageTop={stageTop} stageLeft={stageLeft} stageWidth={stageWidth} stageHeight={stageHeight}/>
    );
  }
}
