import React from 'react';
import '../Styles/synthCubeSide.css';
import { SynthCubeSide } from '../Components/synthCubeSide.js';

export class SynthCubeSideContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      top: {
        zOrder: 0,
        height: "0px",
        width: "100px",
        top: "0px",
        left: "0px",
        borderWidth: "0px"
      },
      bottom: {
        zOrder: 0,
        height: "0px",
        width: "100px",
        top: "100px",
        left: "0px",
        borderWidth: "0px"
      },
      front: {
        zOrder: 0,
        height: "100px",
        width: "100px",
        top: "0px",
        left: "0px",
        borderWidth: "10px"
      },
      back: {
        zOrder: 0,
        height: "100px",
        width: "100px",
        top: "0px",
        left: "0px",
        borderWidth: "10px"
      },
      left: {
        zOrder: 0,
        height: "100px",
        width: "0px",
        top: "0px",
        left: "0px",
        borderWidth: "0px"
      },
      right: {
        zOrder: 0,
        height: "100px",
        width: "0px",
        top: "0px",
        left: "100px",
        borderWidth: "0px"
      }
    };
  }
  render() {
    return (
      <SynthCubeSide zOrder={this.state[this.props.side].zOrder} side={this.props.side} height={this.state[this.props.side].height} width={this.state[this.props.side].width} top={this.state[this.props.side].top} left={this.state[this.props.side].left} borderWidth={this.state[this.props.side].borderWidth}/>

    );
  }
}
