import React, { Component } from 'react'

export class SidebarPeriods extends Component {

  getIcon(status) {
    switch (status) {
      case 'Backlog':
        return 'fa fa-sitemap'
      case 'Unscheduled':
        return 'fa fa-sliders'
      case 'Overdue':
        return 'fa fa-sign-language'
      default:
        return 'fa fa-signal'
    }
  }

  updatePeriodFilter(sprint_number) {
    this.props.setSprintFilter(sprint_number)
  }

  render () {
    let storyPeriods = this.props.periods.map( (period) => {
      return  <li key={period.id} onClick={this.updatePeriodFilter.bind(this, period.id)} className={this.props.sprintFilterId == period.id ? 'selected' : null}>
                <i className={this.getIcon(period.name)}></i>
                <span>{period.name}</span>
              </li>
    })

    return (
      <ul className='sidebar-list'>

        <li onClick={this.updatePeriodFilter.bind(this, 'all')} className={this.props.sprintFilterId == 'all' ? 'selected' : null}>
          <i className={this.getIcon('Backlog')}></i>
          <span>Backlog</span>
        </li>

        { storyPeriods }
      </ul>
    )
  }
}
