import React, { Component } from 'react'
import { Link } from 'react-router'

export class GraphRow extends Component {

  render() {
    const { story, index } = this.props

    return (
      <tr className={index % 2 == 0 ? null : 'even'}>

        <td className='issueType'>
          <i className={`fa fa-file-text ${story.story_type}`}></i>
        </td>

        <td className='summary' colSpan='2'>
          <Link to={`/stories/${story.id}`}>{story.title}</Link>
        </td>

        <td>
          <span className='fa fa-plus'></span>
        </td>

        <td>
          <span className='fa fa-plus'></span>
        </td>

        <td>
          <span className='fa fa-plus'></span>
        </td>

        <td className='toDay'>
          <span className='fa fa-plus'></span>
        </td>

        <td>
          <span className='fa fa-plus'></span>
        </td>

        <td className='nonBusinessDay'>
          <span className='fa fa-plus'></span>
        </td>

        <td className='nonBusinessDay'>
          <span className='fa fa-plus'></span>
        </td>


        <td className='total'>2h</td>
      </tr>
    )
  }
}
