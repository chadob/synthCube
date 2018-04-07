import React from 'react';
import { StarContainer } from '../Containers/starContainer'
export class StarsBox extends React.Component {
  render() {
    return (
      <div>
        <StarContainer windowDem={this.props.windowDem} starRange={this.props.starRange} winWidth={this.props.width} winHeight={this.props.height}/>
      </div>
    );
  }
}
