import React, { Component } from 'react'

import { ShowStory } from './show/ShowStory.jsx'

export class ShowStoryPage extends Component {
  componentWillMount() {
    this.props.actions.fetchStory(this.props.routeParams.id)
  }

  render () {
    const { story, loading, error } = this.props.activeStory

    if (loading || !story) {
      return null
    }

    if (error) {
      return <div>Error: {error}</div>
    }

    return (
      <div id='app-box-wrapper'>
        <div className='app-box'>

          <ShowStory story={story} />

        </div>
      </div>
    )
  }
}
