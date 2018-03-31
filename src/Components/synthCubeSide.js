import React from 'react';

export class SynthCubeSide extends React.Component {
  render() {
    const height = this.props.height;
    const width = this.props.width;
    const top = this.props.top;
    const left = this.props.left
    const borderWidth = this.props.borderWidth;
    const zOrder = this.props.zOrder;
    return (
      <div class="cube-side" style={{height:height, width:width, top:top, left: left, borderWidth: borderWidth, zOrder: zOrder }}>
      </div>
    );
  }
}
