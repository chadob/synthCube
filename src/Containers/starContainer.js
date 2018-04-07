import React from 'react';
import '../Styles/star.css';
import { Star } from '../Components/star.js';

const colors = ['#C501E1', '#9628F9', '#6465FD', '#9628F9', '#2E96F9', '#15E8C8', '#2EF9A0', '#C6E501', '#FE6A5C', '#F72E96', '#E830CE'];

export class StarContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      starColor: colors[Math.floor(Math.random() * colors.length)],
      position: {
        left: this.props.starRange.x[Math.floor(Math.random() * this.props.starRange.x.length)],
        top: this.props.starRange.y[Math.floor(Math.random() * this.props.starRange.y.length)]
      },
      width: ,
      height: ,
      speed: {
        xSpeed: this.props.windowDem.width / 4,
        ySpeed: this.props.windowDem.height / 4
      },
      trajectory: ((this.props.starRange.x[Math.floor(Math.random() * this.props.starRange.x.length)]) - this.props.windowDem.midScreenX) / ((this.props.starRange.y[Math.floor(Math.random() * this.props.starRange.y.length)]) - this.props.windowDem.midScreenY),
      distanceMid: ((this.props.starRange.x[Math.floor(Math.random() * this.props.starRange.x.length)]) - this.props.windowDem.midScreenX) + ((this.props.starRange.y[Math.floor(Math.random() * this.props.starRange.y.length)]) - this.props.windowDem.midScreenX),
      maxSize: (((this.props.starRange.x[Math.floor(Math.random() * this.props.starRange.x.length)]) - this.props.windowDem.midScreenX) + ((this.props.starRange.y[Math.floor(Math.random() * this.props.starRange.y.length)]) - this.props.windowDem.midScreenX)) / (this.props.windowDem.width + this.props.windowDem.height)
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
  growStar(width, height) {
    this.setState({
      width: width + ,
      height: height +
    });
  }
  render() {
    return (
      <div>
        <Star startPoint={this.state.starPoint} color={this.state.starColor} speed={this.state.speed} width={} height={} />
      </div>
    );
  }
}
