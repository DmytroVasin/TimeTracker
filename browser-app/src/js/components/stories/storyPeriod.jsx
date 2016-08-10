import React from 'react'

import { StoryBox } from './storyBox.jsx'

export class StoryPeriod extends React.Component {
  render () {
    var storyBoxes = this.props.periodStories.map( (item) => {
      return <StoryBox story={item} key={item.id} removeStory={this.props.removeStory}/>
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
