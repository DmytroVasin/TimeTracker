import React, { Component } from 'react'
import { convertMinutesToTrayFromat } from '../../utils';

export class TrayAppFooter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      interval: null,
      seconds: 0
    }
  }

  componentWillReceiveProps(newProps) {
    this.props.handleUpdateTrayTitle( convertMinutesToTrayFromat(newProps.timer.minutesPassed) )
  }

  handleStartWorking = () => {
    this.props.handleWindowNotification({ title: 'Time Tracker NotificatioN:', message: 'Lorem it has long been known that the readable content' })
    this.props.actions.updateTimer(0)

    let interval = setInterval(
      () => {
        let newSeconds = this.state.seconds + 1

        if (newSeconds % 5 == 0) {
          this.props.actions.updateTimer(60)
        }

        this.setState({ seconds: newSeconds })
      },
      1000
    )

    this.setState({ interval: interval })
  }

  handleResetTimer = () => {
    clearInterval(this.state.interval)
    this.setState({ interval: null, seconds: 0 })

    this.props.actions.resetTimer()
  }

  handleUnPauseTimer = () => {
    let interval = setInterval(
      () => {
        let newSeconds = this.state.seconds + 1

        if (newSeconds % 5 == 0) {
          this.props.actions.updateTimer(60)
        }

        this.setState({ seconds: newSeconds })
      },
      1000
    )

    this.setState({ interval: interval })
  }

  handlePauseTimer = () => {
    this.setState({ interval: null })
    clearInterval(this.state.interval)
  }

  render() {
    let workingBtns = null;

    if( this.state.seconds == 0 && !this.state.interval ) {
      workingBtns = <button>
                      <span className='fa fa-play-circle' onClick={this.handleStartWorking}></span>
                    </button>
    } else if (!this.state.interval) {
      workingBtns = [
        <button key='continue'>
          <span className='fa fa-play-circle' onClick={this.handleUnPauseTimer}></span>
        </button>,
        <button key='reset' className='resetButton'>
          <span className='fa fa-power-off' onClick={this.handleResetTimer}></span>
        </button>
      ]
    } else {
      workingBtns = [
        <button key='stop'>
          <span className='fa fa-pause-circle' onClick={this.handlePauseTimer}></span>
        </button>,
        <button key='reset' className='resetButton'>
          <span className='fa fa-power-off' onClick={this.handleResetTimer}></span>
        </button>
      ]
    }

    return (
      <footer>
        { workingBtns }
        <button className='btn-negative pull-right' onClick={this.props.handleQuitApp}>Quit</button>
      </footer>
    )
  }
}
