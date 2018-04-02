import React from 'react';
import '../Styles/synthCubeSide.css';
import { SynthCubeSide } from '../Components/synthCubeSide.js';

const initialSize = {width: 100, height: 100};
const styles = {
  top: {
    zOrder: 0,
    height: 0,
    width: 100,
    top: 0,
    left: 0,
    borderWidth: 0
  },
  bottom: {
    zOrder: 0,
    height: 0,
    width: 100,
    top: 100,
    left: 0,
    borderWidth: 0
  },
  front: {
    zOrder: 0,
    height: 100,
    width: 100,
    top: 0,
    left: 0,
    borderWidth: 10
  },
  back: {
    zOrder: 0,
    height: 100,
    width: 100,
    top: 0,
    left: 0,
    borderWidth: 10
  },
  left: {
    zOrder: 0,
    height: 100,
    width: 0,
    top: 0,
    left: 0,
    borderWidth: 0
  },
  right: {
    zOrder: 0,
    height: 100,
    width: 0,
    top: 0,
    left: 100,
    borderWidth: 0
  }
}
export class SynthCubeSideContainer extends React.Component {
  render() {
    return (
      <SynthCubeSide
        time={this.props.time}
        scale={this.props.scale}
        side={this.props.side}
        zOrder={styles[this.props.side].zOrder}
        height={styles[this.props.side].height * this.props.scale}
        width={styles[this.props.side].width * this.props.scale}
        top={styles[this.props.side].top}
        left={styles[this.props.side].left}
        borderWidth={styles[this.props.side].borderWidth * this.props.scale}
      />

    );
  }
}
