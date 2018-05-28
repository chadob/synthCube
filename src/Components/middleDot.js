import React from 'react';
export class MiddleDot extends React.Component {
  render() {
    return (
      <div className="middle-dot" style={{top: this.props.position.top, left: this.props.position.left, width: this.props.position.width, height: this.props.position.height, background: this.props.position.background}}>
      </div>
    );
  }
}
