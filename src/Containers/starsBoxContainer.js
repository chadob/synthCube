import React from 'react';
import '../Styles/starsBox.css';
import { StarsBox } from '../Components/starsBox.js';

const initialSize = {height: 100, width: 10}
const initialState = {
  width: "100%",
  height: "100%",
  time: 0,
  maxTime: 6,
  scale: 1,
  windowDem: {
    width: window.innerWidth,
    height: window.innerHeight,
    midScreenX: window.innerWidth / 2,
    midScreenY: window.innerHeight / 2,
  }
};

export class StarsBoxContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = initialState;
    this.state.starRange = {
        x: [
          Math.random() * (this.state.windowDem.midScreenX - 0) + 0,
          Math.random() * (this.state.windowDem.width - this.state.windowDem.midScreenX) + this.state.windowDem.midScreenX
        ],
        y: [
          Math.random() * (this.state.windowDem.midScreenY - 0) + 0,
          Math.random() * (this.state.windowDem.height - this.state.windowDem.midScreenY) + this.state.windowDem.midScreenY
        ]
    };
  }
  starSpawnInterval() {
    const interval = Math.random() * (1000 - 500) + 500;
    setTimeout( ()=> {
      this.spawnStar(interval);
      this.starSpawnInterval();
    }, interval);
  }
  componentDidMount(prevProps, prevState) {
    this.starSpawnInterval();
  }
  spawnStar(interval) {

  }

  render() {
    console.log(this.state.starRange);
    return (
      <div>
        <StarsBox windowDem={this.state.windowDem} starRange={this.state.starRange} />
      </div>
    );
  }
}
