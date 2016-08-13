import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as storyActions from '../../actions/storyActions'

import { StoryForm } from './storyForm.jsx'

class editStoryPage extends React.Component {

  componentWillMount() {
    this.props.actions.fetchPeriods()
    this.props.actions.getStoryRequest(this.props.routeParams.id)
  }

  render () {
    const story = this.props.isLoading ? null : <StoryForm story={this.props.currentStory}
                                                           periods={this.props.periods}
                                                           createOrUpdateStoryRequest={this.props.actions.updateStoryRequest}
                                                           formType='Update' />

    return (
      <div>
        { story }
      </div>
    )
  }
}


// Smart component!
function mapStateToProps(store) {
  return {
    currentStory: store.reducer.currentStory,
    periods: store.reducer.periods,
    isLoading: store.reducer.isLoading
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
)(editStoryPage)
