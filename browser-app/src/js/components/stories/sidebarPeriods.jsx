import React from 'react'

export class SidebarPeriods extends React.Component {

  updatePeriodFilter(sprint_number) {
    this.props.setSprintFilter(sprint_number)
  }

  render () {
    let storyPeriods = this.props.periods.map( (period) => {
      return  <li key={period.id} onClick={this.updatePeriodFilter.bind(this, period.id)} className={this.props.sprintFilterId == period.id ? 'selected' : null}>
                <i className='fa fa-users'></i>
                <span>{period.name}</span>
              </li>
    })

    return (
      <ul className='sidebar-list'>

        <li onClick={this.updatePeriodFilter.bind(this, 'all')} className={this.props.sprintFilterId == 'all' ? 'selected' : null}>
          <i className='fa fa-sitemap'></i>
          <span>Backlog</span>
        </li>

        { storyPeriods }
      </ul>
    )
  }
}
