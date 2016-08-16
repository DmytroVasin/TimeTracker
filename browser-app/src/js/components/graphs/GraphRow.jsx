import React, { Component } from 'react'
import { Link } from 'react-router'

export class GraphRow extends Component {

  openAddTimeDialog(day) {
    this.props.openGraphDialog(this.props.story.id)
  }

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

        <td onClick={() => this.openAddTimeDialog(0)} className='grid'>
          <span className='fa fa-plus'></span>
        </td>

        <td onClick={() => this.openAddTimeDialog(1)} className='grid'>
          <span className='spentTime'>4h</span>
        </td>

        <td onClick={() => this.openAddTimeDialog(2)} className='grid'>
          <span className='fa fa-plus'></span>
        </td>

        <td onClick={() => this.openAddTimeDialog(3)} className='grid toDay'>
          <span className='fa fa-plus'></span>
        </td>

        <td onClick={() => this.openAddTimeDialog(4)} className='grid'>
          <span className='fa fa-plus'></span>
        </td>

        <td onClick={() => this.openAddTimeDialog(5)} className='grid nonBusinessDay'>
          <span className='fa fa-plus'></span>
        </td>

        <td onClick={() => this.openAddTimeDialog(6)} className='grid nonBusinessDay'>
          <span className='fa fa-plus'></span>
        </td>

        <td className='total'>2h</td>
      </tr>
    )
  }
}
