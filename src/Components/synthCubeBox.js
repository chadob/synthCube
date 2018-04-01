import React from 'react';
import { SynthCubeContainer } from '../Containers/synthCubeContainer';
export class SynthCubeBox extends React.Component {
  render() {
    const width = this.props.width;
    const height = this.props.height;
    const scale = this.props.scale;
    const time = this.props.time;
    return (
      <div className="cube-box" style={{width:width, height:height}}>
        <SynthCubeContainer scale={scale} time={time}/>
      </div>
    );
  }
}
