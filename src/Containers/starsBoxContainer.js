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
  spawnStar() {
    
  }

  render() {
    return (
      <div>
        <StarsBox time={this.state.time} scale={this.state.scale} width={this.state.width} height={this.state.height}/>
      </div>
    );
  }
}
