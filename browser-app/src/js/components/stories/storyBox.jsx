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

              <td className='title'>
                <p>{this.props.story.title}</p>
              </td>

              <td className='actions' rowSpan='2'>
                <a href="#" className ='edit'><i className="fa fa-pencil"></i></a>
                <a href="#" className ='show'><i className="fa fa-eye"></i></a>
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

