import React from 'react';
import '../Styles/star.css';
import { Star } from '../Components/star.js';

const colors = ['#C501E1', '#9628F9', '#6465FD', '#9628F9', '#2E96F9', '#15E8C8', '#2EF9A0', '#C6E501', '#FE6A5C', '#F72E96', '#E830CE'];

export class StarContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      starColor: colors[Math.floor(Math.random() * colors.length)],
      startPoint: {
        x: this.props.starRange.x[Math.floor(Math.random() * this.props.starRange.x.length)],
        y: this.props.starRange.y[Math.floor(Math.random() * this.props.starRange.y.length)]
      },
      speed: {
        xSpeed: this.props.windowDem.width / 4,
        ySpeed: this.props.windowDem.height / 4
      }
    }

  }
  moveStar(curPos, speed) {
    return {
      left: (curPos.x > 0 ? curPos.x + speed.xSpeed : curPos.x - speed.xSpeed),
      top: (curPos.y > 0 ? curPos.y + speed.ySpeed : curPos.y - speed.ySpeed)
    };
  }
  render() {
    const trajectory = (this.state.startPoint.x - this.props.windowDem.midScreenX) / (this.state.startPoint.y - this.props.windowDem.midScreenY);
    const distanceMid = (this.state.startPoint.x - this.props.windowDem.midScreenX) + (this.state.startPoint.y - this.props.windowDem.midScreenX);
    const maxSize = distanceMid / (this.props.windowDem.width + this.props.windowDem.height);
    return (
      <div>
        <Star/>
      </div>
    );
  }
}
