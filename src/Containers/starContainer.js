import React from 'react';
import '../Styles/star.css';
import { Star } from '../Components/star.js';

export class StarContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      starColor: this.props.starColor,
      position: this.props.position,
      rotation: this.props.rotation,
      width: this.props.width,
      height: this.props.height,
      growthRate: this.props.growthRate,
      timeAlive: this.props.timeAlive,
      lifeSpan: this.props.lifeSpan,
      id: this.props.id,
      finishedStats: this.props.finishedStats
    };
  }
  componentDidMount(prevProps, prevState) {
    // this.cubeTimer = setInterval(
    //   () =>
    //     this.tick(), 1000/6
    // );
    let styleSheet = document.styleSheets[7];
    let animationName = `animation${this.state.id}`;
    let animateStar =
    `@-webkit-keyframes ${animationName} {
      0% {
        height: ${this.state.height}px;
        top: ${this.state.position.top}px;
        left: ${this.state.position.left}px;
      }
      100% {
        height: ${this.state.finishedStats.maxHeight}px;
        width: ${this.state.finishedStats.maxWidth}px;
        top: ${this.state.finishedStats.y}px;
        left: ${this.state.finishedStats.x}px;
      }
    }`;
    styleSheet.insertRule(animateStar, styleSheet.cssRules.length);
    let starClass = `star${this.state.id}`;
    let shadow =
    `#star${this.state.id} {
      box-shadow:
        inset 0px 0px 5px 0px ${this.state.starColor},
        0px 0px 3px 3px ${this.state.starColor};
      ;
    }`;
    styleSheet.insertRule(shadow, styleSheet.cssRules.length);

    this.setState({
      animateStar: animateStar,
      animationName: animationName
    });
  }
  render() {
    return (
      <div className="star-container">
        <Star id={this.state.id} animationName={this.state.animationName} animateStar={this.state.animateStar} lifeSpan={this.state.lifeSpan} position={this.state.position} rotation={this.state.rotation} color={this.props.starColor} width={this.state.width} height={this.state.height} />
      </div>
    );
  }
}
