import React from 'react';
import '../Styles/starsBox.css';
import { StarsBox } from '../Components/starsBox.js';

const initialState = {
  width: "100%",
  height: "100%",
  refreshRate: 1000/60,
  scale: 1,
  windowDem: {
    width: window.innerWidth,
    height: window.innerHeight,
    midScreenX: window.innerWidth / 2,
    midScreenY: window.innerHeight / 2,
  },
  starsArray: [{
    starColor: 'red',
    position: {left: 2, top: 3},
    width: 10,
    height: 100,
    speed: {xSpeed: 1, ySpeed: 1},
    timeAlive: 2000,
    lifeSpan: 3000}],
  colors: ['#C501E1', '#9628F9', '#6465FD', '#9628F9', '#2E96F9', '#15E8C8', '#2EF9A0', '#C6E501', '#FE6A5C', '#F72E96', '#E830CE']
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
      this.spawnStar();
      this.starSpawnInterval();
    }, interval);
  }
  componentDidMount(prevProps, prevState) {
    this.starSpawnInterval();
  }
  spawnStar() {
    const starColor = this.state.colors[Math.floor(Math.random() * this.state.colors.length)];
    const position = {
      left: this.state.starRange.x[Math.floor(Math.random() * this.state.starRange.x.length)],
      top: this.state.starRange.y[Math.floor(Math.random() * this.state.starRange.y.length)]
    };
    const distanceMid = Math.abs(position.left + this.state.windowDem.midScreenX) + (position.top - this.state.windowDem.midScreenX);
    const speed = {
      xSpeed: this.state.windowDem.width / 3 / this.state.refreshRate, //be
      ySpeed: this.state.windowDem.height / 3 / this.state.refreshRate
    };
    const width = 10;
    const height = 100;
    const lifeSpan = 3000;
    const maxSize = (position.left - this.state.windowDem.midScreenX) + (position.top - this.state.windowDem.midScreenX) / (this.state.windowDem.width + this.state.windowDem.height);
    this.setState({
      starsArray: this.state.starsArray.push({
        starColor: starColor,
        position: position,
        width: width,
        height: height,
        speed: speed,
        timeAlive: 0,
        lifeSpan: lifeSpan
      })
    });
  }

  render() {
    console.log(this.state.starRange);
    return (
      <div>
        <StarsBox windowDem={this.state.windowDem} starsArray={this.state.starsArray} starRange={this.state.starRange} />
      </div>
    );
  }
}
