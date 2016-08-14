import React, { Component } from 'react'

import { StoryForm } from './StoryForm.jsx'

export class EditStoryPage extends Component {
  componentWillMount() {
    this.props.actions.fetchStory(this.props.routeParams.id)
    this.props.actions.fetchPeriods()
  }

  render () {
    const { story, loading, error } = this.props.activeStory

    if (loading) {
      return null
    } else if (error) {
      return <div className="container">Error: {error}</div>
    }

    return (
      <StoryForm story={story}
                 periods={this.props.periods}
                 createOrUpdateStory={this.props.actions.updateStory}
                 formType='Update' />
    )
  }
}
