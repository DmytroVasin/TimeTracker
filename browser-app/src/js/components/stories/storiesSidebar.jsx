// https://egghead.io/lessons/javascript-redux-react-todo-list-example-filtering-todos
import React from 'react'

export class StoriesSideBar extends React.Component {
  render () {
    // TODO: WTF onClick ?

    return (
      <div id='stories-sidebar'>

        <div className='sidebar-title'>Story Periods</div>

        <ul className='sidebar-list'>
          <li className='selected'>
            <i className='fa fa-users'></i>
            <span>Sprint 27</span>
          </li>

          <li>
            <i className='fa fa-share-square'></i>
            <span>Sprint 28</span>
          </li>

          <li>
            <i className='fa fa-sitemap'></i>
            <span>Unscheduled</span>
          </li>
        </ul>

        <div className='devider'></div>

        <ul className='sidebar-list'>
          <li onClick={() => this.props.setStatusFilter('in_progress')} className={this.props.statusFilter == 'in_progress' ? 'selected' : null}>
            <i className="fa fa-server yellow"></i>
            In Progress
            <span className='badge'>3</span>
          </li>

          <li onClick={() => this.props.setStatusFilter('estimated')} className={this.props.statusFilter == 'estimated' ? 'selected' : null}>
            <i className="fa fa-server green"></i>
            Estimated
            <span className='badge'>5</span>
          </li>

          <li onClick={() => this.props.setStatusFilter('to_estimate')} className={this.props.statusFilter == 'to_estimate' ? 'selected' : null}>
            <i className="fa fa-server grey"></i>
            To Estimate
            <span className='badge'>15</span>
          </li>

          <li onClick={() => this.props.setStatusFilter('')} className={this.props.statusFilter == '' ? 'selected' : null}>
            <i className="fa fa-server"></i>
            All
            <span className='badge'>30</span>
          </li>
        </ul>

      </div>
    )
  }
}
