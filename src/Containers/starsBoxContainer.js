import React from 'react';
import '../Styles/starsBox.css';
import { StarsBox } from '../Components/starsBox.js';

const initialState = {
  width: "100%",
  height: "100%",
  refreshRate: 1000/6,
  scale: 1,
  windowDem: {
    width: window.innerWidth,
    height: window.innerHeight,
    midScreenX: window.innerWidth / 2,
    midScreenY: window.innerHeight / 2,
  },
  starsArray: [
    {
      starColor: 'red',
      position: {left: 2, top: 3},
      width: 10,
      height: 100,
      movement: {x: 1, y: 1},
      timeAlive: 2000,
      lifeSpan: 6000
    }
  ],
    colors: ['#C501E1', '#9628F9', '#6465FD', '#9628F9', '#2E96F9', '#15E8C8', '#2EF9A0', '#C6E501', '#FE6A5C', '#F72E96', '#E830CE']
};

export class StarsBoxContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = initialState;
    this.deleteStar = this.deleteStar.bind(this);
  }
  starSpawnInterval() {
    const interval = 6000;
    setTimeout( ()=> {
      this.spawnStar();
      this.starSpawnInterval();
    }, interval);
  }
  componentDidMount(prevProps, prevState) {
    for (var i = 0; i < 5; i++) {
      this.spawnStar();
    }
    this.starSpawnInterval();
    console.log(this.state);
  }
  spawnStar() {
    const starColor = this.state.colors[Math.floor(Math.random() * this.state.colors.length)];
    const starRange = {
        x: [
          Math.random() * (this.state.windowDem.midScreenX - 0) + 0,
          Math.random() * (this.state.windowDem.width - this.state.windowDem.midScreenX) + this.state.windowDem.midScreenX
        ],
        y: [
          Math.random() * (this.state.windowDem.midScreenY - 0) + 0,
          Math.random() * (this.state.windowDem.height - this.state.windowDem.midScreenY) + this.state.windowDem.midScreenY
        ]
    };
    const position = {
      left: 810,
      top: 300
    };
    const width = 5;
    const height = 50;
    const halfH = .5 * height;

    let slope; //slope isn't always rise over run, it's actually just the opposite offset over adjacent offset
    let rotation;
    //Determine angle it needs to be rotated based on how farm from middle it is
    if (position.top > this.state.windowDem.midScreenY) {
      if (position.left > this.state.windowDem.midScreenX) {
        slope = Math.abs((position.top - this.state.windowDem.midScreenY) / (position.left - this.state.windowDem.midScreenX));
        rotation = Math.atan(slope) * 180/Math.PI + 90;
      } else {
        slope = Math.abs((position.left - this.state.windowDem.midScreenX) / (position.top - this.state.windowDem.midScreenY));
        rotation = Math.atan(slope) * 180/Math.PI + 180;
      }
    } else {
      if (position.left > this.state.windowDem.midScreenX) {
        slope = Math.abs((position.left - this.state.windowDem.midScreenX) / (position.top - this.state.windowDem.midScreenY));
        rotation = Math.atan(slope) * 180/Math.PI + 0;
      } else {
        slope = Math.abs((position.top - this.state.windowDem.midScreenY) / (position.left - this.state.windowDem.midScreenX));
        rotation = Math.atan(slope) * 180/Math.PI + 270;
      }
    }
    const tOffset = (Math.cos((90 - (rotation - 90)) * Math.PI / 180) * halfH) + halfH;
    const lOffset = (Math.sin((90 - (rotation - 90)) * Math.PI / 180) * halfH);
    position.left = position.left - lOffset;
    position.top = position.top - tOffset;

    const distanceMid = Math.sqrt(Math.pow((position.left - this.state.windowDem.midScreenX), 2) + (Math.pow(position.top - this.state.windowDem.midScreenX), 2));
    const percentDone = {
      x: position.left / this.state.windowDem.width,
      y: position.top / this.state.windowDem.height
    };
    const distanceFromSides = {
      x: this.state.windowDem.width - position.left,
      y: this.state.windowDem.height - position.top
    };
    const endPoint = percentDone.x > percentDone.y ? {x: this.state.windowDem.width, y: this.state.windowDem.width * slope} : {x: this.state.windowDem.height / slope, y: this.state.windowDem.height};
    console.log(endPoint);
    const maxTimeAlive = 3;
    const movement = {
      xMovement: (endPoint.x - this.state.windowDem.midScreenX) / maxTimeAlive / this.state.refreshRate, //be
      yMovement: (endPoint.y - this.state.windowDem.midScreenY) / maxTimeAlive / this.state.refreshRate
    };
    const growthRate = 10;
    const finishedStats = {
      maxHeight: maxTimeAlive * this.state.refreshRate * growthRate,
      x: endPoint.x - (Math.sin((90 - (rotation - 90)) * Math.PI / 180) * this.maxHeight),
      y: endPoint.y - ((Math.cos((90 - (rotation - 90)) * Math.PI / 180) * halfH) + this.maxHeight)
    };
    const animateStar = `
      0% {
        height: ${height};
        top: ${position.y};
        left: ${position.x};
      }
      100% {
        height: ${finishedStats.maxHeight};
        top: ${finishedStats.y};
        left: ${finishedStats.x};
      }
    `;
    const lifeSpan = 6000;
    const maxSize = (position.left - this.state.windowDem.midScreenX) + (position.top - this.state.windowDem.midScreenX) / (this.state.windowDem.width + this.state.windowDem.height);
    const tempStarsArray = this.state.starsArray;
    tempStarsArray.push({
      starColor: starColor,
      position: position,
      rotation: rotation,
      width: width,
      height: height,
      movement: {x: movement.xMovement, y: movement.yMovement},
      timeAlive: 0,
      lifeSpan: lifeSpan,
      growthRate: growthRate,
      animateStar: animateStar
    });
    this.setState({
      starsArray: tempStarsArray
    });
  }
  deleteStar(star) {
    const tempStarsArray = this.state.starsArray;
    tempStarsArray.splice(star, 1);
    this.setState({
      starsArray: tempStarsArray
    });
  }
  render() {
    return (
      <div>
        <StarsBox deleteStar={this.deleteStar} midScreenX={this.state.windowDem.midScreenX} midScreenY={this.state.windowDem.midScreenY} windowDem={this.state.windowDem} starsArray={this.state.starsArray} starRange={this.state.starRange} />
      </div>
    );
  }
}
