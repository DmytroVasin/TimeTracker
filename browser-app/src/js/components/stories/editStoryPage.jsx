import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as storyActions from '../../actions/storyActions'

import { StoryForm } from './storyForm.jsx'

export class editStoryPage extends React.Component {

  componentWillMount() {
    this.props.actions.editStoryRequest(this.props.routeParams.id)
  }

  render () {
    const story = this.props.currentStory ? <StoryForm story={this.props.currentStory} createOrUpdateStoryRequest={this.props.actions.updateStoryRequest} formType='Update' /> : null

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
