import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as storyActions from '../../actions/storyActions'

import { ShowStory } from './showStory.jsx'

class showStoryPage extends React.Component {
  // TODO: в чем отличие конструктора от ComponenWillMount?
  componentWillMount() {
    this.props.actions.getStoryRequest(this.props.routeParams.id)
  }

  render () {
    const story = this.props.currentStory ? <ShowStory story={this.props.currentStory} /> : null

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
    currentStory: store.reducer.currentStory,
    isLoading: store.reducer.isLoading
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(storyActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(showStoryPage)
