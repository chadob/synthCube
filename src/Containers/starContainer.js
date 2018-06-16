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
    console.log(styleSheet);
    let animationName = `animation${this.state.id}`;
    let animateStar =
    `@-webkit-keyframes ${animationName} {
      0% {
        height: ${this.state.height};
        top: ${this.state.position.top};
        left: ${this.state.position.left};
      }
      100% {
        height: ${this.state.finishedStats.maxHeight};
        top: ${this.state.finishedStats.y};
        left: ${this.state.finishedStats.x};
      }
    }`;
    styleSheet.insertRule(animateStar, styleSheet.cssRules.length);

    this.setState({
      animateStar: animateStar,
      animationName: animationName
    });
  }
  // tick() {
  //   this.setState({
  //     timeAlive: this.state.timeAlive +=1000/60
  //   })
  //   if (this.state.timeAlive < this.state.lifeSpan) {
  //     // this.moveStar();
  //     // this.growStar();
  //   } else {
  //     clearInterval(this.cubeTimer);
  //     this.props.deleteStar(this.props.identity);
  //   }
  // }
  // moveStar() {
  //   this.setState({
  //     position: {
  //       left: (this.state.position.left >= this.props.midScreenX ? this.state.position.left += this.state.movement.x : this.state.position.left -= this.state.movement.x),
  //       top: (this.state.position.top >= this.props.midScreenY ? this.state.position.top += this.state.movement.y : this.state.position.top -= this.state.movement.y)
  //     }
  //   });
  // }
  // growStar() {
  //   const newHeight = this.state.height;
  //   this.setState({
  //     width: this.state.width,
  //     height: newHeight + 10
  //   });
  // }
  render() {
    return (
      <div className="star-container">
        <Star animationName={this.state.animationName} animateStar={this.state.animateStar} lifeSpan={this.state.lifeSpan} position={this.state.position} rotation={this.state.rotation} color={this.props.starColor} width={this.state.width} height={this.state.height} />
      </div>
    );
  }
}
