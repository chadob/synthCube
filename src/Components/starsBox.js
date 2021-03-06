import React from 'react';
import { StarContainer } from '../Containers/starContainer'

export class StarsBox extends React.Component {
  render() {
    return (
      <div style={{width: this.props.width, height: this.props.height}}>
        {this.props.starsArray.map((star, index) =>
          <StarContainer
            origPos={star.origPos}
            id={index}
            starsArray={this.props.starsArray}
            identity={index}
            deleteStar={this.props.deleteStar}
            starColor={star.starColor}
            midScreenX={this.props.midScreenX}
            midScreenY={this.props.midScreenY}
            position={star.position}
            rotation={star.rotation}
            width={star.width}
            height={star.height}
            movement={star.movement}
            growthRate={star.growthRate}
            finishedStats={star.finishedStats}
            timeAlive={star.timeAlive}
            lifeSpan={star.lifeSpan}
          />
        )}
      </div>
    );
  }
}
