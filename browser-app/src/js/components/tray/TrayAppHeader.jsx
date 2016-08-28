import React, { Component } from 'react'

export class TrayAppHeader extends Component {
  render() {
    return (
      <header>
        <button>
          <span className='fa fa-bars' onClick={this.props.handleMainAppOpen}></span>
        </button>

        <button className='pull-right'>
          <span className='fa fa-cog' onClick={this.props.handleAboutOpen}></span>
        </button>
      </header>
    )
  }
}
