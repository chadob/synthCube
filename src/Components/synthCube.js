import React from 'react';
import { SynthCubeSideContainer } from '../Containers/synthCubeSideContainer'
export class SynthCube extends React.Component {
  render() {
    return (
      <div className="cube-neon">
        <SynthCubeSideContainer side="top"/>
        <SynthCubeSideContainer side="bottom"/>
        <SynthCubeSideContainer side="front"/>
        <SynthCubeSideContainer side="back"/>
        <SynthCubeSideContainer side="left"/>
        <SynthCubeSideContainer side="right"/>
      </div>
    );
  }
}
