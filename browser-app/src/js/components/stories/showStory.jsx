import React from 'react'

export class ShowStory extends React.Component {

  handleEditStoryClick () {
    this.props.editStoryRequest(this.props.story.id)
  }

  render () {
    const { story } = this.props

    return (
      <div id='story'>
        <div className='story-inner'>

          <div className={`notif notif-notice`}>
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
