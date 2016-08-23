import React, { Component } from 'react'
import { Link } from 'react-router'

export class Navigation extends Component {
  render() {
    return (
      <div id='header'>
        <span className='project_name'>Lost Angels Project</span>

        <ul>
          <li><Link to='/'>Stories</Link></li>
          <li><Link to='/graph'>Graph</Link></li>
        </ul>

        <Link className='add-story' to='/stories/new'><i className="fa fa-plus-square-o"></i></Link>
      </div>
    );
  }
};
