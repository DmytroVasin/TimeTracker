import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as storyActions from '../../actions/storyActions'

import { ShowStory } from './showStory.jsx'

class showStoryPage extends React.Component {
  render () {
    const story = this.props.currentStory ? <ShowStory story={this.props.currentStory} editStoryRequest={this.props.actions.editStoryRequest} /> : null

    return (
      <div className='new-story-inner'>
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
)(showStoryPage)
