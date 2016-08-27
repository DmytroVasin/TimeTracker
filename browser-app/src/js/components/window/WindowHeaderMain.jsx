import React, { Component } from 'react'

import { WindowHeader } from './WindowHeader'

export class WindowHeaderMain extends Component {

  handleWindowClose = () => {
    ipcRenderer.send('hide-main-window-event');
    return false;
  }
  handleWindowMinimize = () => {
    ipcRenderer.send('minimize-main-window-event');
    return false;
  }
  handleWindowMaximize = () => {
    ipcRenderer.send('toggle-maximize-main-window-event');
    return false;
  }

  render() {
    let buttonClasses = {close: 'close', minimize: 'minimize', maximize: 'maximize'}

    return (
      <WindowHeader title='Time Tracker'
                    buttonClasses={buttonClasses}
                    handleWindowClose={this.handleWindowClose}
                    handleWindowMinimize={this.handleWindowMinimize}
                    handleWindowMaximize={this.handleWindowMaximize} />
    )
  }
}
