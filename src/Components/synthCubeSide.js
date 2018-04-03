import React from 'react';

export class SynthCubeSide extends React.Component {
  render() {
    const side = this.props.side;
    const classSide = "cube-side-" + this.props.side + " cube-side"
    const height = this.props.height;
    const width = this.props.width;
    const transform = this.props.transform;
    console.log(transform);
    const borderWidth = this.props.borderWidth;
    const zOrder = this.props.zOrder;
    return (
      <div className={classSide} style={{height:height, width:width, transform: transform, borderWidth: borderWidth, zOrder: zOrder }}>
      </div>
    );
  }
}
