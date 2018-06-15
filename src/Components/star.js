import React from 'react';
export class Star extends React.Component {
  render() {
    let style = {
      animationName: this.props.animateStar,
      animationTimingFunction: 'ease-in-out',
      animationDuration: this.props.lifeSpan + 's',
      animationDelay: '0.0s',
      animationIterationCount: 1,
      animationDirection: 'normal',
      animationFillMode: 'forwards'
    };
    return (
      <div className="star" style={{style, top: this.props.position.top, left: this.props.position.left, transform: 'rotate(' + this.props.rotation + 'deg)', width: this.props.width, height: this.props.height, background: this.props.color}}>
      </div>
    );
  }
}
