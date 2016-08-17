// TODO: тут должно быть?
// TODO: Duplication
const moment = require('moment')

import React, { Component } from 'react'
import { Link } from 'react-router'

export class GraphRow extends Component {

  openAddTimeDialog(event) {
    let rect = event.currentTarget.getClientRects()[0]

    let positionTop = rect.top - 18
    let positionRight = window.innerWidth - rect.right + rect.width + 3

    let taskDate = moment().startOf('isoWeek').isoWeekday(2).format('ddd D/MMM')

    this.props.openGraphDialog(this.props.story.id, taskDate, {positionTop: positionTop, positionRight: positionRight})
  }

  // Duplication!
  isToDay = (dayNumber) => {
    if (dayNumber == moment().isoWeekday()) {
      return 'toDay'
    }

    null
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

        <td onClick={this.openAddTimeDialog.bind(this)} className={`grid ${this.isToDay(1)}`}>
          <span className='fa fa-plus'></span>
        </td>

        <td onClick={this.openAddTimeDialog.bind(this)} className={`grid ${this.isToDay(2)}`}>
          <span className='spentTime'>4h</span>
        </td>

        <td onClick={this.openAddTimeDialog.bind(this)} className={`grid ${this.isToDay(3)}`}>
          <span className='fa fa-plus'></span>
        </td>

        <td onClick={this.openAddTimeDialog.bind(this)} className={`grid ${this.isToDay(4)}`}>
          <span className='fa fa-plus'></span>
        </td>

        <td onClick={this.openAddTimeDialog.bind(this)} className={`grid ${this.isToDay(5)}`}>
          <span className='fa fa-plus'></span>
        </td>

        <td onClick={this.openAddTimeDialog.bind(this)} className={`grid nonBusinessDay ${this.isToDay(6)}`}>
          <span className='fa fa-plus'></span>
        </td>

        <td onClick={this.openAddTimeDialog.bind(this)} className={`grid nonBusinessDay ${this.isToDay(7)}`}>
          <span className='fa fa-plus'></span>
        </td>

        <td className='total'>2h</td>
      </tr>
    )
  }
}
