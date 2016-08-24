import React from 'react'

export class WindowHeader extends React.Component {

  handleWindowClose = () => {
    if (this.props.buttonClasses.close != 'disabled') {
      this.props.handleWindowClose()
    }
    return false;
  }
  handleWindowMinimize = () => {
    if (this.props.buttonClasses.minimize != 'disabled') {
      this.props.handleWindowMinimize()
    }
    return false;
  }
  handleWindowMaximize = () => {
    if (this.props.buttonClasses.maximize != 'disabled') {
      this.props.handleWindowMaximize()
    }
    return false;
  }

  render() {
    return (
      <div className='window-controls' onDoubleClick={ this.handleWindowMaximize }>
        <div className='window-controls-actions'>
          <div className={`btn ${this.props.buttonClasses.close}`}    onClick={ this.handleWindowClose } />
          <div className={`btn ${this.props.buttonClasses.minimize}`} onClick={ this.handleWindowMinimize } />
          <div className={`btn ${this.props.buttonClasses.maximize}`} onClick={ this.handleWindowMaximize } />
        </div>

        <div className='window-controls-title'>{this.props.title}</div>
      </div>
    );
  }
};
