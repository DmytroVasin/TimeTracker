import React from 'react'
import { Link } from 'react-router'

export class StoryBox extends React.Component {
  constructor (props) {
    super(props);
  }
  // TODO: DRY
  handleRemoveStoryClick () {
    this.props.removeStory(this.props.story.id)
  }

  handleEditStoryClick () {
    this.props.editStoryRequest(this.props.story.id)
  }

  handleShowStoryClick () {
    this.props.getStoryRequest(this.props.story.id)
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
                <span href='#' onClick={this.handleShowStoryClick.bind(this)}><i className='fa fa-eye'></i></span>
                <span href='#' onClick={this.handleEditStoryClick.bind(this)}><i className='fa fa-pencil'></i></span>
                <span href='#' onClick={this.handleRemoveStoryClick.bind(this)}><i className='fa fa-trash'></i></span>
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

