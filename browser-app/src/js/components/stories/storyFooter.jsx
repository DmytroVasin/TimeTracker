import React from 'react'

export class StoryFooter extends React.Component {
  render () {
    return (
      <footer className="story-footer">
        <span className="todo-count">
          <strong>2</strong> stories
        </span>

        <ul className='filters'>
          <li>
            <a href='#' className='selected'>In Progress</a>
          </li>

          <li>
            <a href='#'>Estimated</a>
          </li>

          <li>
            <a href='#'>To Estimate</a>
          </li>

          <li>
            <a href='#'>Completed</a>
          </li>
        </ul>
      </footer>
    )
  }
}
