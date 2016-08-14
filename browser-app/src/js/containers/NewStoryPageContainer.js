import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as storyActions from '../actions/storyActions'

import { NewStoryPage } from '../components/stories/NewStoryPage.jsx';

function mapStateToProps(store) {
  return {
    periods: store.reducer.periodList.periods
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
)(NewStoryPage)
