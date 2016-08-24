import React, { Component } from 'react'

import { WindowHeader } from '../components/window/WindowHeader.jsx'

export class WindowHeaderAboutContainer extends Component {

  handleWindowClose = () => {
    ipcRenderer.send('hide-about-window-event');
    return false;
  }

  render() {
    let buttonClasses = {close: 'close', minimize: 'disabled', maximize: 'disabled'}

    return (
      <WindowHeader title='About Time Tracker'
                    buttonClasses={buttonClasses}
                    handleWindowClose={this.handleWindowClose} />
    )
  }
}
