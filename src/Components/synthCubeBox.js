import React from 'react';
import { SynthCubeStageContainer } from '../Containers/synthCubeStageContainer';

export class SynthCubeBox extends React.Component {
  render() {
    const width = this.props.width;
    const height = this.props.height;
    const scale = this.props.scale;
    const time = this.props.time;
    return (
      <div className="cube-box" style={{overflow:'hidden', width:width, height:height}}>
        <SynthCubeStageContainer scale={scale} time={time}/>
      </div>
    );
  }
}
