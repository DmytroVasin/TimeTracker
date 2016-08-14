import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as storyActions from '../actions/storyActions'

import { StoriesPage } from '../components/stories/StoriesPage.jsx';

function mapStateToProps(store) {
  return {
    stories: store.reducer.storyList.stories,
    periods: store.reducer.periodList.periods,
    statusFilter: store.reducer.statusFilter,
    sprintFilter: store.reducer.sprintFilter
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
)(StoriesPage)
