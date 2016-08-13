import React from 'react'
import { Link } from 'react-router'

export class ShowStory extends React.Component {

  getStoryTypeClass (story_type) {
    let storyClassName = 'notif-icon fa '

    switch (story_type) {
      case 'green':
        storyClassName += 'green fa-check-circle'
        break
      case 'yellow':
        storyClassName += 'yellow fa-exclamation-circle'
        break
      case 'red':
        storyClassName += 'red fa-times-circle'
        break
      case 'grey':
        storyClassName += 'grey fa-pencil-circle'
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
