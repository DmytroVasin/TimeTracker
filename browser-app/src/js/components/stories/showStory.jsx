import React from 'react'
import { Link } from 'react-router'

export class ShowStory extends React.Component {
  getStoryTypeClass (story_type) {
    let storyClassName = 'notif-icon fa '

    switch (story_type) {
      case 'in_progress':
        storyClassName += 'in_progress fa-exclamation-circle'
        break
      case 'estimated':
        storyClassName += 'estimated fa-info-circle'
        break
      case 'to_estimate':
        storyClassName += 'to_estimate fa-times-circle'
        break
      case 'done':
        storyClassName += 'done fa-check-circle'
        break
    }

    return storyClassName
  }

  render () {
    let { story } = this.props
    let storyType = this.getStoryTypeClass(story.story_type)

    return (
      <div id='story'>
        <div className='story-inner'>
          <i className={ storyType } aria-hidden="true"></i>

          <div className='notif'>
            <p className="notif-title">{story.title}</p>

            <p>{story.description}</p>

            <div className="notif-controls">
              <Link to={`/stories/${this.props.story.id}/edit`}>Edit</Link>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
