import React, { Component } from 'react'

import { StoryForm } from './StoryForm.jsx'

export class NewStoryPage extends Component {

  componentWillMount() {
    this.props.actions.fetchPeriods()
  }

  render () {
    return (
      <div id='app-box-wrapper'>
        <div className='app-box'>

          <StoryForm createOrUpdateStory={this.props.actions.createStory}
                     periods={this.props.periods}
                     formType='Create' />

        </div>
      </div>
    )
  }
}
