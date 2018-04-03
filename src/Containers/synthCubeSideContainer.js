import React from 'react';
import '../Styles/synthCubeSide.css';
import { SynthCubeSide } from '../Components/synthCubeSide.js';

const initialSize = {width: 30, height: 30, translate: 25};

export class SynthCubeSideContainer extends React.Component {
  render() {
    const styles = {
      top: {
        zOrder: 0,
        borderWidth: 10,
        transform: "rotateX(90deg) translateZ(" + initialSize.translate * this.props.scale + "px)"
      },
      bottom: {
        zOrder: 0,
        borderWidth: 10,
        transform: "rotateX(-90deg) translateZ(" + initialSize.translate * this.props.scale + "px)"
      },
      front: {
        zOrder: 0,
        borderWidth: 10,
        transform: "rotateX(0deg) translateZ(" + initialSize.translate * this.props.scale + "px)"
      },
      back: {
        zOrder: 0,
        borderWidth: 10,
        transform: "rotateY(180deg) translateZ(" + initialSize.translate * this.props.scale + "px)"
      },
      left: {
        zOrder: 0,
        borderWidth: 10,
        transform: "rotateY(-90deg) translateZ(" + initialSize.translate * this.props.scale + "px)"
      },
      right: {
        zOrder: 0,
        borderWidth: 10,
        transform: "rotateY(90deg) translateZ(" + initialSize.translate * this.props.scale + "px)"
      }
    }
    return (
      <SynthCubeSide
        side={this.props.side}
        time={this.props.time}
        scale={this.props.scale}
        side={this.props.side}
        zOrder={styles[this.props.side].zOrder}
        height={initialSize.height * this.props.scale}
        width={initialSize.width * this.props.scale}
        transform ={styles[this.props.side].transform}
        borderWidth={styles[this.props.side].borderWidth * this.props.scale}
      />

    );
  }
}
