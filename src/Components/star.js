import React from 'react';
export class Star extends React.Component {
  render() {
    return (
      <div className="star" style={{top: this.props.position.top, left: this.props.position.left, transform: 'rotate(' + this.props.rotation + 'deg)', width: this.props.width, height: this.props.height, background: this.props.color}}>
      </div>
    );
  }
}
