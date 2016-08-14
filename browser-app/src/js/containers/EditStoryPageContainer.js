import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as storyActions from '../actions/storyActions'

import { EditStoryPage } from '../components/stories/EditStoryPage.jsx';

function mapStateToProps(store) {
  return {
    activeStory: store.reducer.activeStory,
    periods: store.reducer.periodList.periods,
    loading: store.reducer.isLoading
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
)(EditStoryPage)
