import React, { Component } from 'react'

export class TrayStoryList extends Component {

  render() {
    const { stories, error } = this.props.storyList

    if (error) {
      return <div className='list-group-container'><div>Error: {error}</div></div>
    }

    if (!stories.length) {
      return <div className='list-group-container'><div className='no-story'>No story in progress...</div></div>
    }

    let storyItems = stories.map( (story) => {
      return  (
        <li key={story.id}  className='list-group-item'>
          <span className={`fa fa-circle ${story.story_type}`}></span>
          <p className='story-title'>{story.title}</p>
          <span className='list-group-item-counter'>{story.spent_time}</span>
        </li>
      )
    })

    return (
      <div className='list-group-container'>
        <ul className='list-group'>
          { storyItems }
        </ul>
      </div>
    )
  }
}
