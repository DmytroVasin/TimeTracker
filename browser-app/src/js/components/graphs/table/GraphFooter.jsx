import React, { Component } from 'react'

import moment from 'moment'
import { minutesToHour } from '../../../utils/chartMinutesDisplayer'

export class GraphFooter extends Component {

  columnTotal = (day) => {
    let columnDate = moment().isoWeekday( parseInt(day) ).format('YYYY/MM/DD')
    let _columnTotalMinutes = 0

    this.props.graph.map( (story) => {

      Object.keys(story.log_work).forEach( (key) => {

        if (columnDate == key) {
          story.log_work[key].map( (task) => {
            _columnTotalMinutes += task.minutes
          })
        }

      })

    })

    return minutesToHour(_columnTotalMinutes)
  }

  fullTotal = () => {
    let _fullTotalMinutes = 0
    this.props.graph.map( (story) => {

      Object.keys(story.log_work).forEach( (key) => {

        story.log_work[key].map( (task) => {
          _fullTotalMinutes += task.minutes
        })

      })

    })

    return minutesToHour(_fullTotalMinutes)
  }

  render() {
    return (
      <tfoot>
        <tr>
          <td colSpan='3' className='total'>Total:</td>
          <td>{ this.columnTotal(1) }</td>
          <td>{ this.columnTotal(2) }</td>
          <td>{ this.columnTotal(3) }</td>
          <td>{ this.columnTotal(4) }</td>
          <td>{ this.columnTotal(5) }</td>
          <td>{ this.columnTotal(6) }</td>
          <td>{ this.columnTotal(7) }</td>
          <td>{ this.fullTotal() }</td>
        </tr>
      </tfoot>
    )
  }
}
