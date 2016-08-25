import '../scss/application.scss'

import React, { Component } from 'react'
import { render } from 'react-dom'

class Tray extends Component {

  handleMainAppOpen = () => {
    ipcRenderer.send('show-main-window-event');
  }

  handleAboutOpen = () => {
    ipcRenderer.send('show-about-window-event');
  }

  handleQuitApp = () => {
    ipcRenderer.send('quit-app');
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

          <footer className='toolbar toolbar-footer'>
            <div className='toolbar-actions'>
              <button className='btn btn-default' id='startBtn'>Start Work</button>
              <button className='btn btn-negative pull-right' onClick={this.handleQuitApp}>Quit</button>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

render(<Tray />, document.getElementById('react-root'))
