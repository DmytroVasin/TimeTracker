import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as storyActions from '../../actions/storyActions'

import { StoriesSideBar } from './storiesSidebar.jsx'
import { StoriesWrapper } from './storiesWrapper.jsx'

class storyPage extends Component {
  // TODO: можно ли так делать - или в конструкторе?
  componentWillMount() {
    this.props.actions.fetchStories()
  }

  render() {
    return (
      <div className="stories-container">
        <StoriesSideBar setStatusFilter={this.props.actions.setStatusFilter}
                        statusFilter={this.props.statusFilter}
                        setSprintFilter={this.props.actions.setSprintFilter}
                        sprintFilter={this.props.sprintFilter}/>

        <StoriesWrapper {...this.props} />
      </div>
    )
  }
}


// Smart component!
function mapStateToProps(store) {
  return {
    stories: store.reducer.stories,
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
