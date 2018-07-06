import React from 'react';
import '../Styles/star.css';
export class Star extends React.Component {
  render() {
    return (
      <div className="star" id={"star" + this.props.id} style={{
        animationName: this.props.animationName,
        animationTimingFunction: 'linear',
        animationDuration: this.props.lifeSpan + 's',
        animationDelay: '0.0s',
        animationIterationCount: 'infinite',
        animationDirection: 'normal',
        animationFillMode: 'initial',
        top: this.props.position.top,
        left: this.props.position.left,
        transform: 'rotate(' + this.props.rotation + 'deg)',
        width: this.props.width,
        height: this.props.height,
        background: 'white',
        borderRadius: '3px',
        borderTop: '5px solid yellow',
        zIndex: this.props.width
        }}>
      </div>
    );
  }
}
