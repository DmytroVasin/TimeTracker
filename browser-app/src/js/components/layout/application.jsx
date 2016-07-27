import React, { Component } from 'react'

import { Navigation } from './navigation.jsx'
import { ModalRoot } from './modalRoot.jsx'
import { Spinner } from './spinner.jsx';

import { connect } from 'react-redux';

class Application extends Component {
  render() {
    return (
      <div>
        <ModalRoot />
        <Navigation />
        {this.props.root_reducer.isLoading ? <Spinner /> : this.props.children}
      </div>
    );
  }
}

export default connect(
  store => ({ root_reducer: store.reducer })
)(Application)
