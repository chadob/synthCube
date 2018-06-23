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
    const tMaxOffset = .5 * maxHeight
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
        endPoint = {x: position.left + Math.abs(1 / slope) * this.state.windowDem.midScreenY + Math.sin(rotation * Math.PI/180) * tMaxOffset, y: position.top - Math.abs(slope) * this.state.windowDem.midScreenX + Math.sin(rotation * Math.PI/180) * tMaxOffset};
        if (this.state.windowDem.midScreenX < this.state.windowDem.midScreenY) {
          endPoint = {x: position.left + (this.state.windowDem.width - position.left) + Math.sin(rotation * Math.PI/180) * tMaxOffset, y: position.top - Math.abs(slope) * (this.state.windowDem.width - position.left) + Math.sin(rotation * Math.PI/180) * tMaxOffset};
        } else {
          endPoint = {x: position.left + Math.abs(1 / slope) * (position.top - 0) + Math.sin(rotation * Math.PI/180) * tMaxOffset, y: position.top - (position.top - 0) + Math.sin(rotation * Math.PI/180) * tMaxOffset};
        }
        console.log("Position Left: " + position.left);
        console.log("Mid screen X: " + this.state.windowDem.midScreenX);
        console.log("Edge screen x:" + Math.abs(1 / slope) * (this.state.windowDem.midScreenY - position.top));
        console.log("Position top: " + position.top);
        console.log("mid screen y: " + this.state.windowDem.midScreenY)
        console.log("Edge screen y:" + (this.state.windowDem.midScreenY - position.top));
        console.log("Slope:" + slope);
        console.log(Math.sin(rotation * Math.PI/180) * tMaxOffset);
        console.log(endPoint);
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
