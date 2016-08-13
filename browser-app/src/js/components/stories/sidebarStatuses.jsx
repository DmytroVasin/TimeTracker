import React from 'react'

export class SidebarStatuses extends React.Component {

  storiesCountFor(status) {
    switch (status) {
      case 'all':
        return this.props.stories.length
      default:
        return this.props.stories.filter(story => story.story_type == status).length
    }
  }

  updateStatusFilter(status) {
    this.props.setStatusFilter(status)
  }

  render () {
    return (
      <ul className='sidebar-list'>
        <li onClick={this.updateStatusFilter.bind(this, 'in_progress')} className={this.props.statusFilter == 'in_progress' ? 'selected' : null}>
          <i className="fa fa-server in_progress"></i>
          In Progress
          <span className='badge'>{ this.storiesCountFor('in_progress') }</span>
        </li>

        <li onClick={this.updateStatusFilter.bind(this, 'estimated')} className={this.props.statusFilter == 'estimated' ? 'selected' : null}>
          <i className="fa fa-server done"></i>
          Estimated
          <span className='badge'>{ this.storiesCountFor('estimated') }</span>
        </li>

        <li onClick={this.updateStatusFilter.bind(this, 'to_estimate')} className={this.props.statusFilter == 'to_estimate' ? 'selected' : null}>
          <i className="fa fa-server estimated"></i>
          To Estimate
          <span className='badge'>{ this.storiesCountFor('to_estimate') }</span>
        </li>

        <li onClick={this.updateStatusFilter.bind(this, 'done')} className={this.props.statusFilter == 'done' ? 'selected' : null}>
          <i className="fa fa-server to_estimate"></i>
          Done
          <span className='badge'>{ this.storiesCountFor('done') }</span>
        </li>

        <li onClick={this.updateStatusFilter.bind(this, 'all')} className={this.props.statusFilter == 'all' ? 'selected' : null}>
          <i className="fa fa-server"></i>
          All
          <span className='badge'>{ this.storiesCountFor('all') }</span>
        </li>
      </ul>
    )
  }
}
