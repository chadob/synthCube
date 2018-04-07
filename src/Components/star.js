import React from 'react';
export class Star extends React.Component {
  render() {
    return (
      <div style={top: this.props.top, left: this.props.left, width: this.props.width, height: this.props.height, background: this.props.color}>
      </div>
    );
  }
}
