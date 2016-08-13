import React from 'react'

import { SidebarPeriods } from './sidebarPeriods.jsx'
import { SidebarStatuses } from './sidebarStatuses.jsx'

export class StoriesSideBar extends React.Component {

  render () {
    return (
      <div id='stories-sidebar'>
        <div className='sidebar-title'>Story Periods</div>

        <SidebarPeriods periods={this.props.periods}
                        sprintFilterId={this.props.sprintFilter}
                        setSprintFilter={this.props.setSprintFilter} />

        <div className='devider'></div>

        <SidebarStatuses stories={this.props.stories}
                         statusFilter={this.props.statusFilter}
                         setStatusFilter={this.props.setStatusFilter} />

      </div>
    )
  }
}
