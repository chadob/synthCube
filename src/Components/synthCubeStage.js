import React from 'react';
import { SynthCubeContainer } from '../Containers/synthCubeContainer'

export class SynthCubeStage extends React.Component {
  render() {
    return (
      <div className="cube-stage" style={{top: this.props.stageTop, left: this.props.stageLeft, width: this.props.stageWidth, height: this.props.stageHeight}}>
        <SynthCubeContainer
          time={this.props.time}
          scale={this.props.scale}
          number="left" />
        <SynthCubeContainer
          time={this.props.time}
          scale={this.props.scale}
          number="middle" />
        <SynthCubeContainer
          time={this.props.time}
          scale={this.props.scale}
          number="right" />
      </div>
    );
  }
}
