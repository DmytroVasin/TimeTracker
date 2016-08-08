import React from 'react'
import { Link } from 'react-router'

export class Navigation extends React.Component {
  render() {
    return (
      <div id="header">
        <div className="container">
          <span className='project_name'>Project Name</span>
          <Link to='/'>Stories</Link>
          <Link to='/graph'>Graph</Link>
          <Link to='/stories/new'>Create New Story</Link>
        </div>
      </div>
    );
  }
};
