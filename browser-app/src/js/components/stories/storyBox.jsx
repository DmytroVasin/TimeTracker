import React from 'react'
import { Link } from 'react-router'

export class StoryBox extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (

      <div className="banner-box">
        <table>
          <tbody>
            <tr>
              <td className={'type '+this.props.story.story_type} rowSpan='2'>
              </td>

              <td className='description'>
                <h3>{this.props.story.title}</h3>
                <p>{this.props.story.description}</p>
              </td>
            </tr>

            <tr>
              <td className="learn-more">
                <Link to='/stories/new'>Show</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

