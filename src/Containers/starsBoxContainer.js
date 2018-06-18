import React from 'react';
import '../Styles/starsBox.css';
import { StarsBox } from '../Components/starsBox.js';

const initialState = {
  width: "100%",
  height: "100%",
  scale: 1,
  windowDem: {
    width: window.innerWidth,
    height: window.innerHeight,
    midScreenX: window.innerWidth / 2,
    midScreenY: window.innerHeight / 2,
  },
  starsArray: [
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
    const interval = 3000;
    setTimeout( ()=> {
      this.spawnStar();
    }, interval);
  }
  componentDidMount(prevProps, prevState) {
    for (var i = 0; i < 10; i++) {
      this.starSpawnInterval();
    }
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
    let position = {
      left: Math.floor(Math.random() * Math.floor(this.state.windowDem.width)),
      top: Math.floor(Math.random() * Math.floor(this.state.windowDem.height))
    };
    const width = 5;
    const height = 1;
    const halfH = .5 * height;

    let tanLine; //tanLine isn't always rise over run, it's actually just the opposite offset over adjacent offset
    let rotation;
    const slope = (position.top - this.state.windowDem.midScreenY) / (position.left - this.state.windowDem.midScreenX);
    let endPoint;
    //Determine angle it needs to be rotated based on how farm from middle it is
    if (position.top > this.state.windowDem.midScreenY) {
      if (position.left > this.state.windowDem.midScreenX) {
        tanLine = Math.abs((position.top - this.state.windowDem.midScreenY) / (position.left - this.state.windowDem.midScreenX));
        rotation = Math.atan(tanLine) * 180/Math.PI + 90;
      } else {
        tanLine = Math.abs((position.left - this.state.windowDem.midScreenX) / (position.top - this.state.windowDem.midScreenY));
        rotation = Math.atan(tanLine) * 180/Math.PI + 180;
      }
    } else {
      if (position.left > this.state.windowDem.midScreenX) {
        tanLine = Math.abs((position.left - this.state.windowDem.midScreenX) / (position.top - this.state.windowDem.midScreenY));
        rotation = Math.atan(tanLine) * 180/Math.PI + 0;
      } else {
        tanLine = Math.abs((position.top - this.state.windowDem.midScreenY) / (position.left - this.state.windowDem.midScreenX));
        rotation = Math.atan(tanLine) * 180/Math.PI + 270;
      }
    }
    const tOffset = (Math.cos((90 - (rotation - 90)) * Math.PI / 180) * halfH) + halfH;
    const lOffset = (Math.sin((90 - (rotation - 90)) * Math.PI / 180) * halfH);
    position.left = position.left - lOffset;
    position.top = position.top - tOffset;
    const lifeSpan = 3;
    const growthRate = 10;
    const maxHeight = lifeSpan * growthRate * 60;
    const tMaxOffset = (Math.cos((90 - (rotation - 90)) * Math.PI / 180) * .5 * maxHeight) + .5 * maxHeight;
    const lMaxOffset = (Math.sin((90 - (rotation - 90)) * Math.PI / 180) * .5 * maxHeight);
    console.log(maxHeight);
    console.log(tMaxOffset);
    console.log(lMaxOffset);
    if (position.top > this.state.windowDem.midScreenY) {
      if (position.left > this.state.windowDem.midScreenX) {
        endPoint = {x: position.left + this.state.windowDem.midScreenX - lMaxOffset, y: position.top + this.state.windowDem.midScreenY + tMaxOffset};
        console.log(lMaxOffset);
      } else {
        endPoint = {x: position.left - this.state.windowDem.midScreenX - lMaxOffset, y: position.top + this.state.windowDem.midScreenY + tMaxOffset};
        console.log(lMaxOffset);
      }
    } else {
      if (position.left > this.state.windowDem.midScreenX) {
        endPoint = {x: position.left + this.state.windowDem.midScreenX - lMaxOffset, y: position.top - this.state.windowDem.midScreenY + tMaxOffset};
        console.log(lMaxOffset);
      } else {
        endPoint = {x: position.left - this.state.windowDem.midScreenX - lMaxOffset, y: position.top - this.state.windowDem.midScreenY + tMaxOffset};
        console.log(lMaxOffset);
      }
    }

    const distanceMid = Math.sqrt(Math.pow((position.left - this.state.windowDem.midScreenX), 2) + (Math.pow(position.top - this.state.windowDem.midScreenX), 2));
    const percentDone = {
      x: position.left / this.state.windowDem.width,
      y: position.top / this.state.windowDem.height
    };
    const distanceFromSides = {
      x: this.state.windowDem.width - position.left,
      y: this.state.windowDem.height - position.top
    };
    console.log(position);
    console.log(endPoint);
    const finishedStats = {
      maxHeight: maxHeight,
      x: endPoint.x - (Math.sin((90 - (rotation - 90)) * Math.PI / 180) * maxHeight),
      y: endPoint.y - ((Math.cos((90 - (rotation - 90)) * Math.PI / 180) * halfH) + maxHeight)
    };

    const maxSize = (position.left - this.state.windowDem.midScreenX) + (position.top - this.state.windowDem.midScreenX) / (this.state.windowDem.width + this.state.windowDem.height);
    const tempStarsArray = this.state.starsArray;
    tempStarsArray.push({
      starColor: starColor,
      position: position,
      rotation: rotation,
      width: width,
      height: height,
      timeAlive: 0,
      lifeSpan: lifeSpan,
      growthRate: growthRate,
      finishedStats: finishedStats,
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
