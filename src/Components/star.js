import React from 'react';
export class Star extends React.Component {
  render() {
    return (
      <div style={{top: this.props.position.top, left: this.props.position.left, width: this.props.width, height: this.props.height, background: this.props.color}}>
      </div>
    );
  }
}
