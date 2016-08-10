import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as storyActions from '../../actions/storyActions'


class showStoryPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {error: ''};
  }

  render () {
    return (
      <div className='new-story-inner'>
        { this.props.currentStory }
      </div>
    )
  }
}


// Smart component!
function mapStateToProps(store) {
  return {
    isLoading: store.reducer.isLoading,
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
