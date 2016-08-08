import React from 'react'

export class StoriesSideBar extends React.Component {
  render () {
    return (

      <div id="stories-sidebar">

          <div className="sidebar-title">Story Periods</div>

          <ul className="sidebar-list">
            <li className='selected'>
              <i className="fa fa-users"></i>
              <span>Sprint 27</span>
            </li>

            <li>
              <i className="fa fa-share-square"></i>
              <span>Sprint 28</span>
            </li>

            <li>
              <i className="fa fa-server"></i>
              <span>Unscheduled</span>
            </li>
          </ul>

      </div>
    )
  }
}
