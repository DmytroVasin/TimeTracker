import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import { StoriesSideBar } from './storiesSidebar.jsx'
import { CreateNewStory } from './createNewStory.jsx'
import { StoryPeriod } from './storyPeriod.jsx'

import * as storyActions from '../../actions/storyActions'

class storyPage extends Component {
  componentDidMount() {
    this.props.actions.fetchStories()
  }

  render() {
    const { stories, actions } = this.props;

    return (
      <div className="stories-wrapper">
        <StoriesSideBar />
        <CreateNewStory addStory={actions.addStory} />

        <div className="stories-main">
          <StoryPeriod title='Sprint 26' periodStories={ stories.filter(story => story.period == 1) } />
          <StoryPeriod title='Overdue'   periodStories={ stories.filter(story => story.period == 2) } />
        </div>
      </div>
    )
  }
}

// Smart component!
function mapStateToProps(store) {
  return {
    stories: store.reducer.stories
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
