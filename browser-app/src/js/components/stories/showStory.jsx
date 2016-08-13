import React from 'react'

export class ShowStory extends React.Component {

  handleEditStoryClick () {
    this.props.editStoryRequest(this.props.story.id)
  }

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
              <button onClick={this.handleEditStoryClick.bind(this)}>Edit</button>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
