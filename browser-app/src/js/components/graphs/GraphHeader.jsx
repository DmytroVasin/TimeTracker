import React, { Component } from 'react'
import moment from 'moment'

export class GraphHeader extends Component {

  isToDay = (dayNumber) => {
    if (dayNumber == moment().isoWeekday()) {
      return 'toDay'
    }

    null
  }

  dataTitle = (dayNumber) => {
    let weekDate = moment().startOf('isoWeek').isoWeekday(dayNumber)
    return weekDate.format('ddd D/MMM')
  }

  render() {
    return (
      <thead>
        <tr>
          <th className='colHeader' colSpan='3'>Timesheet</th>

          <th className={ this.isToDay(1) }><span>{ this.dataTitle(1) }</span></th>
          <th className={ this.isToDay(2) }><span>{ this.dataTitle(2) }</span></th>
          <th className={ this.isToDay(3) }><span>{ this.dataTitle(3) }</span></th>
          <th className={ this.isToDay(4) }><span>{ this.dataTitle(4) }</span></th>
          <th className={ this.isToDay(5) }><span>{ this.dataTitle(5) }</span></th>
          <th className={`nonBusinessDay ${this.isToDay(6)}`}><span>{ this.dataTitle(6) }</span></th>
          <th className={`nonBusinessDay ${this.isToDay(7)}`}><span>{ this.dataTitle(7) }</span></th>

          <th>Total</th>
        </tr>
      </thead>
    )
  }
}
