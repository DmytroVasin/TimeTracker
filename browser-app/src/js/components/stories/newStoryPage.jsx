import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as storyActions from '../../actions/storyActions'


export class newStoryPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {error: ''};
  }

  handleSubmit(e) {
    e.preventDefault()

    const period = this.refs.periodInput
    const title = this.refs.titleInput
    const description = this.refs.descriptionInput

    if (title.value && description.value) {
      this.props.actions.addStory(title.value, description.value, period.value)

      title.value = ''
      description.value = ''
      this.setState({error: ''})
    } else {
      this.setState({error: 'Fill in values.'})
    }
  }

  render () {
    var storyError = <div id='new-story-error'>Fill in values.</div>

    return (
      <form id='new-story' onSubmit={this.handleSubmit.bind(this)}>

        <div className='new-story-inner'>
          { this.state.error.length ? storyError : null }

          <div className='new-story-input'>
            <input ref='titleInput' type='text' placeholder='Title' />
          </div>

          <div className='new-story-input'>
            <label className='select'>
              <select ref='periodInput' onChange={this.change}>
                <option value=''>Choose Sprint</option>
                <option value='0'>Unscheduled</option>
                <option value='1'>Sprint 1</option>
                <option value='2'>Sprint 2</option>
                <option value='3'>Sprint 3</option>
              </select>
            </label>
          </div>

          <div className='new-story-input'>
            <textarea ref='descriptionInput' type='text' placeholder='Description'></textarea>
          </div>

          <div className='new-story-submit'>
            <button type='submit'>Create Story</button>
          </div>
        </div>

      </form>
    )
  }
}


// Smart component!
function mapStateToProps(store) {
  return {
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
)(newStoryPage)
