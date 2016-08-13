import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as storyActions from '../../actions/storyActions'

import { StoriesSideBar } from './storiesSidebar.jsx'
import { StoriesWrapper } from './storiesWrapper.jsx'

class storyPage extends Component {
  componentWillMount() {
    this.props.actions.fetchStories()
    this.props.actions.fetchPeriods()
  }

  render() {
    return (
      <div className="stories-container">
        <StoriesSideBar stories={this.props.stories}
                        setStatusFilter={this.props.actions.setStatusFilter}
                        statusFilter={this.props.statusFilter}
                        setSprintFilter={this.props.actions.setSprintFilter}
                        sprintFilter={this.props.sprintFilter}
                        periods={this.props.periods} />

        <StoriesWrapper stories={this.props.stories}
                        periods={this.props.periods}
                        statusFilter={this.props.statusFilter}
                        sprintFilter={this.props.sprintFilter}
                        removeStory={this.props.actions.removeStory} />
      </div>
    )
  }
}


// Smart component!
function mapStateToProps(store) {
  return {
    stories: store.reducer.stories,
    periods: store.reducer.periods,
    statusFilter: store.reducer.statusFilter,
    sprintFilter: store.reducer.sprintFilter
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(storyActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(storyPage)
