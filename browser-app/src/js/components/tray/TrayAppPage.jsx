import React, { Component } from 'react'

import { TrayAppFooter } from './TrayAppFooter.jsx'

export class TrayAppPage extends Component {
  componentWillMount() {
    this.props.actions.fetchStories()
  }

  handleMainAppOpen = () => {
    ipcRenderer.send('show-main-window-event');
  }

  handleAboutOpen = () => {
    localStorage.setItem('reduxState', 'MUAHAHA')
    ipcRenderer.send('show-about-window-event');
  }

  handleQuitApp = () => {
    ipcRenderer.send('quit-app');
  }

  handleUpdateTrayTitle = (minutes) => {
    ipcRenderer.send('update-title-tray-window-event', minutes);
  }

  render() {
    return (
      <div className='window'>
        <div className='tray-container'>
          <header className='toolbar toolbar-header'>
            <div className='toolbar-actions'>
              <button className='btn btn-default'>
                <span className='fa fa-bars' onClick={this.handleMainAppOpen}></span>
              </button>

              <button className='btn btn-default pull-right'>
                <span className='fa fa-cog' onClick={this.handleAboutOpen}></span>
              </button>
            </div>
          </header>

          <div className='list-group-container'>

            <ul className='list-group'>
              <li className='list-group-item'>
                <a href='#'>
                  <span className='fa fa-circle in_progress'></span>
                  LA-2150 List item title
                  <span className='list-group-item-counter'>16</span>
                </a>
              </li>
              <li className='list-group-item'>
                <a href='#'>
                  <span className='fa fa-circle done'></span>
                  LA-2153 This is so cute story
                  <span className='list-group-item-counter'>23</span>
                </a>
              </li>
              <li className='list-group-item'>
                <a href='#'>
                  <span className='fa fa-circle estimated'></span>
                  LA-2150 List item title
                  <span className='list-group-item-counter'>16</span>
                </a>
              </li>
            </ul>

          </div>

          <TrayAppFooter actions={this.props.actions}
                         timer={this.props.timer}
                         handleQuitApp={this.handleQuitApp}
                         handleUpdateTrayTitle={this.handleUpdateTrayTitle}/>
        </div>
      </div>
    )
  }
}
