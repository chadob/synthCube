import React from 'react';
import '../Styles/starsBox.css';
import { StarsBox } from '../Components/starsBox.js';

const initialSize = {height: 100, width: 10}
const initialState = {width: "100%", height: "100%", time: 0, maxTime: 6, scale: 1};

export class StarsBoxContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = initialState;
  }
  componentDidMount(prevProps, prevState) {
    this.spawnStarTimer = setInterval(
      () =>
        this.tick(), 1000
    );
  }
  tick () {
    if (this.state.time < this.state.maxTime) {
      this.setState(function(prevState) {
        return {
          time: prevState.time + 1/60,
          scale: (this.state.time % initialState.maxTime) <= initialState.maxTime / 2 ?
            (initialState.scale + this.state.time)
            :
            (this.state.maxTime / 2 + 1) - ((this.state.time + 1) - (this.state.maxTime / 2 + 1)),
          width: initialState.width * this.state.scale,
          height: initialState.height * this.state.scale
        };
      });
    } else {
      this.setState(function(prevState) {
        return {
          time: 0,
          scale: initialState.scale,
          width: initialState.width,
          height: initialState.height
        };
      });
    }
  }

  render() {
    return (
      <div>
        <StarsBox time={this.state.time} scale={this.state.scale} width={this.state.width} height={this.state.height}/>
      </div>
    );
  }
}
