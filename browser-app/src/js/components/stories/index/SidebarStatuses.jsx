import React from 'react'

export class SidebarStatuses extends React.Component {

  updateStatusFilter(status) {
    this.props.setStatusFilter(status)
  }

  render () {
    let storyTypes = { 'to_estimate': 'To Estimate', 'estimated': 'Estimated', 'in_progress': 'In Progress', 'done': 'Done' }

    let sidebarStatusRows = Object.keys(storyTypes).map( (type) => {
      return  <li key={type} onClick={this.updateStatusFilter.bind(this, type)} className={this.props.statusFilter == type ? 'selected' : null}>
                <i className={`fa fa-file-text ${type}`}></i>
                {storyTypes[type]}
                <span className='badge'>{ this.props.stories.filter(story => story.story_type == type).length }</span>
              </li>
    })

    return (
      <ul className='sidebar-list'>
        { sidebarStatusRows }

        <li onClick={this.updateStatusFilter.bind(this, 'all')} className={this.props.statusFilter == 'all' ? 'selected' : null}>
          <i className='fa fa-file-text all'></i>
          All
          <span className='badge'>{ this.props.stories.length }</span>
        </li>
      </ul>
    )
  }
}
