import React from 'react'

import { StoryBox } from './StoryBox.jsx'

export class StoryPeriod extends React.Component {
  render () {
    var storyBoxes = this.props.periodStories.map( (item) => {
      return <StoryBox story={item} key={item.id} deleteStory={this.props.deleteStory} />
    })

    return (
      <div className="stories-period">
        <div className='period-title'>{this.props.title}</div>
        <div className='story-list'>
          { storyBoxes }
        </div>
      </div>
    )
  }
}
