import React, { Component } from 'react'

import { WindowHeader } from './WindowHeader'

export class WindowHeaderAbout extends Component {

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
