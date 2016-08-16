import React, { Component } from 'react'
import { Link } from 'react-router'

export class GraphRow extends Component {

  openAddTimeDialog(event) {
    let rect = event.currentTarget.getClientRects()[0]

    let positionTop = rect.top - 18
    let positionRight = window.innerWidth - rect.right + rect.width + 3

    this.props.openGraphDialog(this.props.story.id, {positionTop: positionTop, positionRight: positionRight})
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

        <td onClick={this.openAddTimeDialog.bind(this)} className='grid'>
          <span className='fa fa-plus'></span>
        </td>

        <td onClick={this.openAddTimeDialog.bind(this)} className='grid'>
          <span className='spentTime'>4h</span>
        </td>

        <td onClick={this.openAddTimeDialog.bind(this)} className='grid'>
          <span className='fa fa-plus'></span>
        </td>

        <td onClick={this.openAddTimeDialog.bind(this)} className='grid toDay'>
          <span className='fa fa-plus'></span>
        </td>

        <td onClick={this.openAddTimeDialog.bind(this)} className='grid'>
          <span className='fa fa-plus'></span>
        </td>

        <td onClick={this.openAddTimeDialog.bind(this)} className='grid nonBusinessDay'>
          <span className='fa fa-plus'></span>
        </td>

        <td onClick={this.openAddTimeDialog.bind(this)} className='grid nonBusinessDay'>
          <span className='fa fa-plus'></span>
        </td>

        <td className='total'>2h</td>
      </tr>
    )
  }
}
