import React from 'react';
import { StarContainer } from '../Containers/starContainer'

export class StarsBox extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div style={{width: this.props.width, height: this.props.height}}>
        {this.props.starsArray.map((star, index) =>
          <StarContainer
            starColor={star.starColor}
            position={star.position}
            width={star.width}
            height={star.height}
            speed={star.speed}
            growthRate={star.growthRate}
            timeAlive={star.timeAlive}
            lifeSpan={star.lifeSpan}
          />
        )}
      </div>
    );
  }
}
