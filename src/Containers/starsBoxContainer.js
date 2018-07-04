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
    if (i < 5) {
      this.spawnStar();
      const interval = 5;
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
    const width = Math.floor(Math.random() * 5) + 1;
    const height = 1;
    const halfH = .5 * height;
    let tanLine; //tanLine isn't always rise over run, it's actually just the opposite offset over adjacent offset
    let rotation;
    let endPoint;
    const slope = (position.top - this.state.windowDem.midScreenY) / (position.left - this.state.windowDem.midScreenX);
    //Determine angle it needs to be rotated based on how farm from middle it is
    if (position.top > this.state.windowDem.midScreenY) {
      if (position.left > this.state.windowDem.midScreenX) {
        tanLine = Math.abs((position.top - this.state.windowDem.midScreenY) / (position.left - this.state.windowDem.midScreenX));
        rotation = Math.atan(tanLine) * 180/Math.PI + 90;
        position.left = position.left + Math.cos((rotation - 90) * Math.PI/180) * halfH;
        position.top = position.top - halfH + Math.sin((rotation - 90) * Math.PI/180) * halfH;
      } else {
        tanLine = Math.abs((position.left - this.state.windowDem.midScreenX) / (position.top - this.state.windowDem.midScreenY));
        rotation = Math.atan(tanLine) * 180/Math.PI + 180;
        position.left = position.left - Math.sin((rotation - 180) * Math.PI/180) * halfH;
        position.top = position.top - halfH + Math.cos((rotation - 180) * Math.PI/180) * halfH;
      }
    } else {
      if (position.left > this.state.windowDem.midScreenX) {
        tanLine = Math.abs((position.left - this.state.windowDem.midScreenX) / (this.state.windowDem.midScreenY - position.top));
        rotation = Math.atan(tanLine) * 180/Math.PI + 0;
        position.left = position.left + Math.sin(rotation * Math.PI/180) * halfH;
        position.top = position.top - halfH - Math.cos(rotation * Math.PI/180) * halfH;
      } else {
        tanLine = Math.abs((position.top - this.state.windowDem.midScreenY) / (position.left - this.state.windowDem.midScreenX));
        rotation = Math.atan(tanLine) * 180/Math.PI + 270;
        position.left = position.left - Math.cos((rotation - 270) * Math.PI/180) * halfH;
        position.top = position.top - halfH - Math.sin((rotation - 270) * Math.PI/180) * halfH;
      }
    }
    const lifeSpan = -.5* width + 3.5;
    const growthRate = 1;
    const maxHeight = 150;
    const maxWidth = width + 5;
    let distanceMid;
    let endDM;
    let yInt;
    let distance;
    const tMaxOffset = .5 * maxHeight


    const adjSlope = (this.state.windowDem.midScreenX - position.left) / (this.state.windowDem.midScreenY - position.top);
    //y and x int are flipped because of weird equation things
    const adjYInt = {x: 0, y: position.left - adjSlope * position.top};
    const adjXVal = {x: (this.state.windowDem.width - adjYInt.y) / adjSlope, y: this.state.windowDem.width};

    if (position.top > this.state.windowDem.midScreenY) {
      if (position.left > this.state.windowDem.midScreenX) {
        const distanceMid = Math.sqrt(Math.pow(position.left - this.state.windowDem.midScreenX, 2) + (Math.pow(position.top - this.state.windowDem.midScreenY, 2)));
        endDM = distanceMid + Math.sqrt(Math.pow(this.state.windowDem.midScreenX, 2) + (Math.pow(this.state.windowDem.midScreenY, 2)));
        endPoint = {x: Math.cos((rotation - 90) * Math.PI/180) * endDM + this.state.windowDem.midScreenX, y: this.state.windowDem.midScreenY + Math.sin((rotation - 90) * Math.PI/180) * endDM - tMaxOffset};
      } else {
        const distanceMid = Math.sqrt(Math.pow(this.state.windowDem.midScreenX - position.left, 2) + (Math.pow(position.top - this.state.windowDem.midScreenY, 2)));
        endDM = distanceMid + Math.sqrt(Math.pow(this.state.windowDem.midScreenX, 2) + (Math.pow(this.state.windowDem.midScreenY, 2)));
        endPoint = {x: Math.sin(rotation * Math.PI/180) * endDM + this.state.windowDem.midScreenX, y: this.state.windowDem.midScreenY - Math.cos(rotation * Math.PI/180) * endDM - tMaxOffset};
      }
    } else {
      if (position.left > this.state.windowDem.midScreenX) {
        const distanceMid = Math.sqrt(Math.pow(position.left - this.state.windowDem.midScreenX, 2) + (Math.pow(this.state.windowDem.midScreenY - position.top, 2)));
        endDM = distanceMid + Math.sqrt(Math.pow(this.state.windowDem.midScreenX, 2) + (Math.pow(this.state.windowDem.midScreenY, 2)));
        endPoint = {x: Math.sin(rotation * Math.PI/180) * endDM + this.state.windowDem.midScreenX, y: this.state.windowDem.midScreenY - Math.cos(rotation * Math.PI/180) * endDM - tMaxOffset};
        //after we check which distance is greater we flip the y and x so that we can use them in code and assign them to endpoint
        if (rotation > 45) {
        // if (Math.sqrt(Math.pow((position.top - adjYInt.x), 2) + Math.pow((position.left - adjYInt.y), 2)) >= Math.sqrt(Math.pow((position.top - adjXVal.x), 2) + Math.pow((position.left - adjXVal.y), 2))) {
          endPoint = {x: adjYInt.y + Math.sin(rotation * Math.PI/180) * tMaxOffset, y: adjYInt.x - Math.sin(rotation * Math.PI/180) * tMaxOffset};
        } else {
          endPoint = {x: adjXVal.y + Math.sin(rotation * Math.PI/180) * tMaxOffset, y: adjXVal.x - Math.sin(rotation * Math.PI/180) * tMaxOffset};
        }

        console.log("Slope:" + slope);
        console.log('yInt: ' + adjYInt);
        console.log("Position Left: " + position.left + " Position top: " + position.top);
        console.log("Mid screen X: " + this.state.windowDem.midScreenX + " mid screen y: " + this.state.windowDem.midScreenY);
        console.log(endPoint);
        console.log(adjYInt);
        console.log(adjXVal);
      } else {
        const distanceMid = Math.sqrt(Math.pow(this.state.windowDem.midScreenX - position.left, 2) + (Math.pow(position.top - this.state.windowDem.midScreenY, 2)));
        endDM = distanceMid + Math.sqrt(Math.pow(this.state.windowDem.midScreenX, 2) + (Math.pow(this.state.windowDem.midScreenY, 2)));
        endPoint = {x: Math.sin(rotation * Math.PI/180) * endDM + this.state.windowDem.midScreenX, y: this.state.windowDem.midScreenY - Math.cos(rotation * Math.PI/180) * endDM - tMaxOffset};
      }
    }


    const percentDone = {
      x: position.left / this.state.windowDem.width,
      y: position.top / this.state.windowDem.height
    };
    const distanceFromSides = {
      x: this.state.windowDem.width - position.left,
      y: this.state.windowDem.height - position.top
    };
    const finishedStats = {
      maxHeight: maxHeight,
      maxWidth: maxWidth,
      x: endPoint.x - (Math.sin((90 - (rotation - 90)) * Math.PI / 180) * maxHeight),
      y: endPoint.y - ((Math.cos((90 - (rotation - 90)) * Math.PI / 180) * halfH) + maxHeight)
    };

    const maxSize = (position.left - this.state.windowDem.midScreenX) + (position.top - this.state.windowDem.midScreenY) / (this.state.windowDem.width + this.state.windowDem.height);
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
