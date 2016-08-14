import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as storyActions from '../actions/storyActions'

import { ShowStoryPage } from '../components/stories/ShowStoryPage.jsx';

function mapStateToProps(store) {
  return {
    activeStory: store.reducer.activeStory,
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
)(ShowStoryPage)
