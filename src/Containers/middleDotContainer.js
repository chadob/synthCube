import React from 'react';
import { MiddleDot } from '../Components/middleDot.js';

export class MiddleDotContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      width: 10,
      height: 10,
      top: window.innerHeight / 2,
      left: window.innerWidth / 2,
      background: "blue"
    };
  }
  render() {
    return (
      <div className="middle-dot">
        <MiddleDot top={this.state.top} left={this.state.left} width={this.state.width} height={this.state.height} background={this.state.background} />
        <MiddleDot top={300} left={810} width={this.state.width} height={this.state.height} background={this.state.background} />
      </div>
    );
  }
}
