import React from 'react'
import { Link } from 'react-router'

export class Navigation extends React.Component {
  render() {
    return (
      <div id='header'>
        <span className='project_name'>Project Name</span>

        <ul>
          <li><Link to='/'>Stories</Link></li>
          <li><Link to='/graph'>Graph</Link></li>
        </ul>

        <Link className='add-story' to='/stories/new'><i className="fa fa-plus-square-o"></i></Link>
      </div>
    );
  }
};
