import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';


import { StoryPeriod } from './storyPeriod.jsx'

import { Spinner } from '../layout/spinner.jsx';

import * as storyActions from '../../actions/storyActions'

class StoriesWrapper extends React.Component {
  componentDidMount() {
    this.props.actions.fetchStories()
  }

  render () {
    const { stories } = this.props;

    return (

      <div id="stories-wrapper">
        {this.props.isLoading ? <Spinner />:null }

        <div className="stories-main">
          <StoryPeriod title='Sprint 26' periodStories={ stories.filter(story => story.period == 1) } />
          <StoryPeriod title='Spring 27' periodStories={ stories.filter(story => story.period == 2) } />
          <StoryPeriod title='Overdue'   periodStories={ stories.filter(story => story.period == 3) } />
        </div>

      </div>
    )
  }
}

// Smart component!
function mapStateToProps(store) {
  return {
    isLoading: store.reducer.isLoading,
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
)(StoriesWrapper)
