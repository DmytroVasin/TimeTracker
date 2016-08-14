import React, { Component } from 'react'
import { Link } from 'react-router'

export class ShowStory extends Component {
  constructor(props) {
    super(props)

    this.state = {
      story: this.props.story
    }
  }

  getStoryTypeClass (story_type) {
    let storyClassName = 'notif-icon fa '

    switch (story_type) {
      case 'to_estimate':
        storyClassName += 'to_estimate fa-times-circle'
        break
      case 'estimated':
        storyClassName += 'estimated fa-info-circle'
        break
      case 'in_progress':
        storyClassName += 'in_progress fa-exclamation-circle'
        break
      case 'done':
        storyClassName += 'done fa-check-circle'
        break
    }

    return storyClassName
  }

  render () {
    let { story } = this.state
    let storyType = this.getStoryTypeClass(story.story_type)

    return (
      <div id='story'>
        <i className={ storyType } aria-hidden="true"></i>

        <div className='notif'>
          <p className='notif-title'>{story.title}</p>

          <p>{story.description}</p>

          <div className='notif-controls'>
            <Link className='button' to={`/stories/${story.id}/edit`}>Edit</Link>
          </div>
        </div>
      </div>
    )
  }
}
