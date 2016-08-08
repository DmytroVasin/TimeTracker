import React from 'react'

export class StoriesSideBar extends React.Component {
  render () {
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
          <li>
            <i className="fa fa-server yellow"></i>
            In Progress
            <span className='badge'>3</span>
          </li>

          <li>
            <i className="fa fa-server green"></i>
            Estimated
            <span className='badge'>5</span>
          </li>

          <li>
            <i className="fa fa-server grey"></i>
            To Estimate
            <span className='badge'>15</span>
          </li>
        </ul>

      </div>
    )
  }
}
