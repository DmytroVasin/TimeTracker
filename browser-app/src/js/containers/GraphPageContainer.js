import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as storyActions from '../actions/storyActions'

import { GraphPage } from '../components/graphs/GraphPage.jsx';

function mapStateToProps(store) {
  return {
    stories: store.reducer.storyList.stories,
    graphDialog: store.reducer.graphDialog,
    graph: store.reducer.graphTable.graph
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
)(GraphPage)
