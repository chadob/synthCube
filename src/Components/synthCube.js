import React from 'react';
import { SynthCubeSideContainer } from '../Containers/synthCubeSideContainer'
export class SynthCube extends React.Component {
  render() {
    return (
      <div className="cube-neon" style={{width: this.props.width, height: this.props.height}}>
        <SynthCubeSideContainer scale={this.props.scale} time={this.props.time} side="top"/>
        <SynthCubeSideContainer scale={this.props.scale} time={this.props.time} side="bottom"/>
        <SynthCubeSideContainer scale={this.props.scale} time={this.props.time} side="front"/>
        <SynthCubeSideContainer scale={this.props.scale} time={this.props.time} side="back"/>
        <SynthCubeSideContainer scale={this.props.scale} time={this.props.time} side="left"/>
        <SynthCubeSideContainer scale={this.props.scale} time={this.props.time} side="right"/>
      </div>
    );
  }
}
