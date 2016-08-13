import React from 'react'
import { Link } from 'react-router'

export class StoryForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      error: '',
      formType: this.props.formType,
      story: this.props.story || { title: '', description: '', period_id: '1' }
    }
  }

  // TODO: WAT ??
  componentWillReceiveProps(nextProps) {
    let newState = this.state
    newState['story'] = nextProps.story
    this.setState(newState)
  }

  handleSubmit(e) {
    e.preventDefault()

    if (this.state.story.title && this.state.story.description) {
      this.props.createOrUpdateStoryRequest(this.state.story)
    } else {
      this.setState({error: 'Fill in values.'})
    }
  }

  // TODO: правильно ли так делать?
  // TODO: DRY
  handleTitleChange (event) {
    let newState = this.state
    newState['story']['title'] = event.target.value
    this.setState(newState)
  }

  handleDescriptionChange (event) {
    let newState = this.state
    newState['story']['description'] = event.target.value
    this.setState(newState)
  }

  handlePeriodChange (event) {
    let newState = this.state
    newState['story']['period_id'] = event.target.value
    this.setState(newState)
  }


  render () {
    var storyError = <div id='new-story-error'>Fill in values.</div>

    return (
      <form id='new-story' onSubmit={this.handleSubmit.bind(this)}>

        <div className='new-story-inner'>
          { this.state.error.length ? storyError : null }

          <div className='new-story-input'>
            <input value={this.state.story.title} onChange={this.handleTitleChange.bind(this)} placeholder='Title' />
          </div>

          <div className='new-story-input'>
            <label className='select'>
              <select value={this.state.story.period_id} onChange={this.handlePeriodChange.bind(this)}>
                <option value=''>Choose Sprint</option>
                <option value='1'>Unscheduled</option>
                <option value='2'>Overdue</option>
                <option value='3'>Sprint 1</option>
                <option value='4'>Sprint 2</option>
              </select>
            </label>
          </div>

          <div className='new-story-input'>
            <textarea value={this.state.story.description} onChange={this.handleDescriptionChange.bind(this)} placeholder='Description'></textarea>
          </div>

          <div className='new-story-submit'>
            <button type='submit'>{this.state.formType} Story</button>
          </div>
        </div>

      </form>
    )
  }
}
