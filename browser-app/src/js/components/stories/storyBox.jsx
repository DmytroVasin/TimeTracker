import React from 'react'
import { Link } from 'react-router'

export class StoryBox extends React.Component {
  handleRemoveStoryClick (e) {
    e.preventDefault()
    this.props.removeStory(this.props.story.id)
  }

  render () {
    return (
      <div className="banner-box">
        <table>
          <tbody>
            <tr>
              <td className={`type ${this.props.story.story_type}`} rowSpan='2'>
              </td>

              <td className='title'>
                <p>{this.props.story.title}</p>
              </td>

              <td className='actions' rowSpan='2'>
                <Link to={`/stories/${this.props.story.id}`}><i className='fa fa-eye'></i></Link>
                <Link to={`/stories/${this.props.story.id}/edit`}><i className='fa fa-pencil'></i></Link>
                <a href='#' onClick={this.handleRemoveStoryClick.bind(this)}><i className='fa fa-trash'></i></a>
              </td>
            </tr>

            <tr>
              <td className="learn-more">
                <span>dv 2</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

