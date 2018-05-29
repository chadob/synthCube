import React from 'react';
export class MiddleDot extends React.Component {
  render() {
    return (
      <div className="middle-dot" style={{top: this.props.top, left: this.props.left, width: this.props.width, height: this.props.height, background: this.props.background}}>
      </div>
    );
  }
}
