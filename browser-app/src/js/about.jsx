import '../scss/application.scss'

import React, { Component } from 'react'
import { render } from 'react-dom'

import { version } from './utils';

import { WindowHeaderAbout } from './components/window/WindowHeaderAbout'

const timeTrackerUrl = require('../images/time-tracker.png');

class About extends Component {

  getStorage = () => {
    console.log( localStorage.getItem('reduxState') )
  }

  render() {
    return (
      <div className='window'>
        <WindowHeaderAbout />

        <div className='window-container'>
          <div className='about-container'>
            <img src={timeTrackerUrl} alt='Time Tracker' onClick={this.getStorage} />

            <div className='about'>
              <div className='version'>Version { version() }</div>

              <p><strong>Time Tracker</strong></p>
              <p>App is based on Electron, React, Redux + Rails as a back end.</p>

              <p><strong>Back End API:</strong></p>
              <p>https://peaceful-dawn-52251.herokuapp.com</p>

              <div className='copyright'>
                <div>Github: https://github.com/DmytroVasin</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

render(<About />, document.getElementById('react-root'))
