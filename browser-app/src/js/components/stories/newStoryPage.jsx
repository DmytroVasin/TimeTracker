import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as storyActions from '../../actions/storyActions'

import { StoryForm } from './storyForm.jsx'

export class newStoryPage extends React.Component {

  componentWillMount() {
    this.props.actions.fetchPeriods()
  }

  render () {
    return (
      <StoryForm createOrUpdateStoryRequest={this.props.actions.createStoryRequest}
                 periods={this.props.periods}
                 formType='Create' />
    )
  }
}


// Smart component!
function mapStateToProps(store) {
  return {
    periods: store.reducer.periods
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
)(newStoryPage)
