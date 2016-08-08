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
        </div>

        <Link className='add-story' to='/stories/new'><i className="fa fa-plus-square-o"></i></Link>
      </div>
    );
  }
};
