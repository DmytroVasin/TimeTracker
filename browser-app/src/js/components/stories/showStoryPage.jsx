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
    } else if (error) {
      return <div>Error: {error}</div>
    } else {
      return (
        <div id='wrapperBox'>
          <div className='wrapperInner'>

            <ShowStory story={story} />

          </div>
        </div>
      )
    }
  }
}
