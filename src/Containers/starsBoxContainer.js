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
  starSpawnInterval(i) {
    i++;
    if (i < 1000) {
      this.spawnStar();
      const interval = 1;
      setTimeout( ()=> {
        this.starSpawnInterval(i);
      }, interval);
    }
  }
  componentDidMount(prevProps, prevState) {
    console.log({x: this.state.windowDem.midScreenX, y: this.state.windowDem.midScreenY});
    var i = 0;
    this.starSpawnInterval(i);
  }
  spawnStar() {
    const starColor = this.state.colors[Math.floor(Math.random() * this.state.colors.length)];
    let position = {
      left: Math.floor(Math.random() * Math.floor(this.state.windowDem.width)),
      top: Math.floor(Math.random() * Math.floor(this.state.windowDem.height))
    };
    let origPos = position;
    // const width = Math.floor(Math.random() * 3) + 1;
    const width = Math.floor(Math.random() * 5) + 1;
    const height = 1;
    let tanLine; //tanLine isn't always rise over run, it's actually just the opposite offset over adjacent offset
    let rotation;
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
    // const lifeSpan = -.5* width + 6.5;
    const lifeSpan = 6;
    const growthRate = 1;
    const maxHeight = 300;
    const maxWidth = width + 5;
    //y and x int are flipped because of weird equation things
    let adjYInt;
    let adjXVal;
    let yInt;
    const adjSlope = (this.state.windowDem.midScreenX - position.left) / (this.state.windowDem.midScreenY - position.top);

    if (position.top > this.state.windowDem.midScreenY) {
      if (position.left > this.state.windowDem.midScreenX) {
        yInt = position.left - (adjSlope * position.top);
        adjYInt = {x: this.state.windowDem.height * 2, y: adjSlope * this.state.windowDem.height * 2 + yInt};
        adjXVal = {x: (this.state.windowDem.width * 2 - yInt) / adjSlope, y: this.state.windowDem.width * 2};
        if (rotation > 135) {
          endPoint = {x: adjYInt.y + Math.sin(rotation * Math.PI/180) * maxHeight, y: adjYInt.x - Math.cos(rotation * Math.PI/180) * maxHeight};
        } else {
          endPoint = {x: adjXVal.y + Math.sin(rotation * Math.PI/180) * maxHeight, y: adjXVal.x - Math.cos(rotation * Math.PI/180) * maxHeight};
        }
      } else {
        yInt = position.left - (adjSlope * position.top);
        adjYInt = {x: this.state.windowDem.height * 2, y: adjSlope * this.state.windowDem.height * 2 + yInt};
        adjXVal = {x: (-1 * this.state.windowDem.width - yInt) / adjSlope, y: -1 * this.state.windowDem.width};
        if (rotation > 225) {
          endPoint = {x: adjXVal.y + Math.sin(rotation * Math.PI/180) * maxHeight, y: adjXVal.x - Math.cos(rotation * Math.PI/180) * maxHeight};
        } else {
          endPoint = {x: adjYInt.y + Math.sin(rotation * Math.PI/180) * maxHeight, y: adjYInt.x - Math.cos(rotation * Math.PI/180) * maxHeight};
        }
      }
    } else {
      if (position.left > this.state.windowDem.midScreenX) {
        yInt = position.left - (adjSlope * position.top);
        adjYInt = {x: -1 * this.state.windowDem.height, y: (adjSlope * -1 * this.state.windowDem.height) + yInt};
        adjXVal = {x: (this.state.windowDem.width * 2 - yInt) / adjSlope, y: this.state.windowDem.width * 2};
        //after we check which distance is greater we flip the y and x so that we can use them in code and assign them to endpoint
        if (rotation > 45) {
          endPoint = {x: adjXVal.y + Math.sin(rotation * Math.PI/180) * maxHeight, y: adjXVal.x - Math.cos(rotation * Math.PI/180) * maxHeight};
        } else {
          endPoint = {x: adjYInt.y + Math.sin(rotation * Math.PI/180) * maxHeight, y: adjYInt.x - Math.cos(rotation * Math.PI/180) * maxHeight};
        }
      } else {
        yInt = position.left - (adjSlope * position.top);
        adjYInt = {x: -1 * this.state.windowDem.height, y: (adjSlope * -1 * this.state.windowDem.height) + yInt};
        adjXVal = {x: (-1 * this.state.windowDem.width - yInt) / adjSlope, y: -1 * this.state.windowDem.width};
        if (rotation > 315) {
          endPoint = {x: adjYInt.y, y: adjYInt.x};
        } else {
          endPoint = {x: adjXVal.y, y: adjXVal.x};
        }
      }
    }
    const finishedStats = {
      maxHeight: maxHeight,
      maxWidth: maxWidth,
      x: endPoint.x,
      y: endPoint.y
    };

    const tempStarsArray = this.state.starsArray;
    tempStarsArray.push({
      origPos: origPos,
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
