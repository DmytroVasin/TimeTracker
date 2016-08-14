import React, { Component } from 'react'

import { StoriesSideBar } from './index/StoriesSidebar.jsx'
import { StoriesWrapper } from './index/StoriesWrapper.jsx'

export class StoriesPage extends Component {
  componentWillMount() {
    this.props.actions.fetchStories()
    this.props.actions.fetchPeriods()
  }

  render() {
    return (
      <div className='stories-container'>
        <StoriesSideBar stories={this.props.stories}
                        periods={this.props.periods}
                        statusFilter={this.props.statusFilter}
                        sprintFilter={this.props.sprintFilter}
                        setStatusFilter={this.props.actions.setStatusFilter}
                        setSprintFilter={this.props.actions.setSprintFilter} />

        <StoriesWrapper stories={this.props.stories}
                        periods={this.props.periods}
                        statusFilter={this.props.statusFilter}
                        sprintFilter={this.props.sprintFilter}
                        deleteStory={this.props.actions.deleteStory} />
      </div>
    )
  }
}
