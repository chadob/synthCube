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
      speed: this.props.speed,
      growthRate: this.props.growthRate,
      timeAlive: this.props.timeAlive,
      lifeSpan: this.props.lifeSpan
    };
  }
  componentDidMount(prevProps, prevState) {
    this.cubeTimer = setInterval(
      () =>
        this.tick(), 1000/60
    );
  }
  tick() {
    if (this.state.height < this.state.maxHeight) {
      this.moveStar();
      this.growStar();
    } else {
    }
  }
  moveStar() {
    this.setState({
      position: {
        left: (this.state.position.left > 0 ? this.state.position.left + this.state.speed.xSpeed : this.state.position.left - this.state.speed.xSpeed),
        top: (this.state.position.top > 0 ? this.state.position.top + this.state.speed.ySpeed : this.state.position.top - this.state.speed.ySpeed)
      }
    });
  }
  growStar() {
    const newHeight = this.state.height;
    this.setState({
      width: this.state.width,
      height: newHeight + 10
    });
  }
  render() {
    return (
      <div className="star-container">
        <Star position={this.state.position} rotation={this.state.rotation} color={this.props.starColor} speed={this.props.speed} width={this.state.width} height={this.state.height} />
      </div>
    );
  }
}
