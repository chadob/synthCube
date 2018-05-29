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
      movement: this.props.movement,
      growthRate: this.props.growthRate,
      timeAlive: this.props.timeAlive,
      lifeSpan: this.props.lifeSpan
    };
  }
  componentDidMount(prevProps, prevState) {
    this.cubeTimer = setInterval(
      () =>
        this.tick(), 1000/6
    );
  }
  tick() {
    this.setState({
      timeAlive: this.state.timeAlive +=1000/60
    })
    if (this.state.timeAlive < this.state.lifeSpan) {
      this.moveStar();
      // this.growStar();
    } else {
      clearInterval(this.cubeTimer);
      this.props.deleteStar(this.props.identity);
    }
  }
  moveStar() {
    this.setState({
      position: {
        left: (this.state.position.left >= this.props.midScreenX ? this.state.position.left += this.state.movement.x : this.state.position.left -= this.state.movement.x),
        top: (this.state.position.top >= this.props.midScreenY ? this.state.position.top += this.state.movement.y : this.state.position.top -= this.state.movement.y)
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
        <Star position={this.state.position} rotation={this.state.rotation} color={this.props.starColor} movement={this.props.movement} width={this.state.width} height={this.state.height} />
      </div>
    );
  }
}
