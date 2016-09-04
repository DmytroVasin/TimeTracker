import '../styles/application.scss'

import React, { Component } from 'react'
import { render } from 'react-dom'

import { ecoSystemJson } from './utils';

import { WindowHeader } from './components/window/WindowHeader'

const timeTrackerUrl = require('../images/time-tracker.png');

class About extends Component {

  openGithubExternal = () => {
    shell.openExternal( ecoSystemJson().buildAbout.appRepo );
  }

  render() {
    return (
      <div className='window'>
        <WindowHeader title='About Time Tracker' close='true' />

        <div className='window-container'>
          <div className='about-container'>
            <img src={timeTrackerUrl} alt='Time Tracker' />

            <div className='about'>
              <div className='version'>Version { ecoSystemJson().version }</div>

              <p><strong>{ ecoSystemJson().appName }</strong></p>
              <p>{ ecoSystemJson().description }</p>

              <p><strong>Back End API:</strong></p>
              <p>{ ecoSystemJson().buildAbout.apiApp }</p>

              <div className='copyright'>
                <div>Github: <span onClick={this.openGithubExternal}>{ ecoSystemJson().buildAbout.appRepo }</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

render(<About />, document.getElementById('react-root'))
