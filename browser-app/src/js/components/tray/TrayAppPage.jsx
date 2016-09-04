import React, { Component } from 'react'

import { TrayAppHeader } from './TrayAppHeader'
import { TrayAppFooter } from './TrayAppFooter'
import { TrayStoryList } from './TrayStoryList'

import TraySpinner from './TraySpinner';

export class TrayAppPage extends Component {
  componentWillMount() {
    this.props.actions.fetchStories()
  }

  handleMainAppOpen = () => {
    ipcRenderer.send('show-main-window-event');
  }

  handleAboutOpen = () => {
    ipcRenderer.send('show-about-window-event');
  }

  handleQuitApp = () => {
    ipcRenderer.send('quit-app');
  }

  handleUpdateTrayTitle = (minutes) => {
    ipcRenderer.send('update-title-tray-window-event', minutes);
  }

  handleWindowNotification = (options) => {
    ipcRenderer.send('create-notification-window-event', options);
  }

  render() {
    return (
      <div className='window'>
        <div className='window-container tray-window'>
          <TrayAppHeader handleMainAppOpen={this.handleMainAppOpen}
                         handleAboutOpen={this.handleAboutOpen} />


          <TrayStoryList storyList={this.props.storyList} />


          <TrayAppFooter actions={this.props.actions}
                         timer={this.props.timer}
                         handleQuitApp={this.handleQuitApp}
                         handleUpdateTrayTitle={this.handleUpdateTrayTitle}
                         handleWindowNotification={this.handleWindowNotification}/>
          <TraySpinner />
        </div>
      </div>
    )
  }
}
