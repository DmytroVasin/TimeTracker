import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as storyActions from '../../actions/storyActions'

import { StoryForm } from './storyForm.jsx'

export class editStoryPage extends React.Component {
  render () {
    var storyError = <div id='new-story-error'>Fill in values.</div>

    return (
      <StoryForm createOrUpdateStoryRequest={this.props.actions.updateStoryRequest}
                 formType='Update'
                 story={this.props.currentStory} />
    )
  }
}


// Smart component!
function mapStateToProps(store) {
  return {
    currentStory: store.reducer.currentStory
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
