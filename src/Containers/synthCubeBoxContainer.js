import React from 'react';
import { SynthCubeBox } from '../Components/synthCubeBox.js';
import '../Styles/synthCubeBox.css';


const initialState = {width: 500, height: 100, time: 0, maxTime: 6, scale: 1};
export class SynthCubeBoxContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = initialState;
  }
  componentDidMount(prevProps, prevState) {
    this.cubeTimer = setInterval(
      () =>
        this.tick(), 1000/60
    );
  }
  tick () {
    if (this.state.time < this.state.maxTime) {
      this.setState(function(prevState) {
        console.log(prevState);
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
      clearInterval(this.cubeTimer);
      this.setState(function(prevState) {
        console.log(prevState);
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
      <SynthCubeBox time={this.state.time} scale={this.state.scale} width={this.state.width} height={this.state.height}/>
    );
  }
}
