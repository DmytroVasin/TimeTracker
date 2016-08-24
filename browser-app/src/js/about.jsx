import '../scss/application.scss'

import React, { Component } from 'react'
import { render } from 'react-dom'

import { WindowHeaderAboutContainer } from './containers/WindowHeaderAboutContainer'


class About extends Component {
  render() {
    return (
      <div className='window'>
        <WindowHeaderAboutContainer />

        <div className='window-container'>
          <div className='about-container'>
            <img src='../images/time-tracker.png' alt='Time Tracker' />

            <div className='about'>
              <div className='version'>Version 0.0.1</div>

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
