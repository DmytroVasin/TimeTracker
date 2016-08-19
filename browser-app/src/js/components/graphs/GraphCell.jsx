// TODO: тут должно быть?
// TODO: Duplication
const moment = require('moment')

import React, { Component } from 'react'

export class GraphCell extends Component {

  openAddTimeDialog(currentDayNumber, event) {
    let rect = event.currentTarget.getClientRects()[0]

    let positionTop = rect.top - 18
    let positionRight = window.innerWidth - rect.right + rect.width + 3

    let dialogDate = moment().isoWeekday( parseInt(this.props.day) ).format('YYYY/MM/DD')

    this.props.openGraphDialog(this.props.storyId, dialogDate, {positionTop: positionTop, positionRight: positionRight}, this.props.dayTasks)
  }


  cellClassName = () => {
    let cellName = 'grid'

    if ( this.props.day == moment().isoWeekday().toString() ) {
      cellName += ' toDay'
    }

    if (this.props.isDayOff == 'true') {
      cellName += ' nonBusinessDay'
    }

    return cellName
  }


  render() {
    const { dayTasks } = this.props
    let timer = null

    if ( dayTasks.length ) {
      let hoursWorked = 0
      dayTasks.forEach( (task) => {
        hoursWorked += Number.parseInt(task.time)
      })
      timer = <span className='spentTime'>{hoursWorked}</span>
    } else {
      timer = <span className='fa fa-plus'></span>
    }

    return (
      <td onClick={ this.openAddTimeDialog.bind(this, '10') } className={ this.cellClassName() }>
        {timer}
      </td>
    )
  }
}
