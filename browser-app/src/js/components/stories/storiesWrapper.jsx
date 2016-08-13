import React from 'react'

import { StoryPeriod } from './storyPeriod.jsx'
import { Spinner } from '../layout/spinner.jsx';

export class StoriesWrapper extends React.Component {
  getFilteredStories(stories, statusFilter) {
    switch (statusFilter) {
      case 'in_progress':
        return stories.filter(story => story.story_type == 'yellow');
      case 'estimated':
        return stories.filter(story => story.story_type == 'red');
      case 'to_estimate':
        return stories.filter(story => story.story_type == 'grey');
      case 'done':
        return stories.filter(story => story.story_type == 'green');
      default:
        return stories
    }
  }

  render () {
    const { stories, isLoading, statusFilter, sprintFilter } = this.props
    const filteredStories = this.getFilteredStories(stories, statusFilter)

    return (
      <div id="stories-wrapper">

        <div className="stories-main">
          <StoryPeriod title='Overdue'     periodStories={ filteredStories.filter(story => story.period_id == 2) } removeStory={this.props.actions.removeStory} />
          <StoryPeriod title='Sprint 1'    periodStories={ filteredStories.filter(story => story.period_id == 3) } removeStory={this.props.actions.removeStory} />
          <StoryPeriod title='Spring 2'    periodStories={ filteredStories.filter(story => story.period_id == 4) } removeStory={this.props.actions.removeStory} />
          <StoryPeriod title='Unscheduled' periodStories={ filteredStories.filter(story => story.period_id == 1) } removeStory={this.props.actions.removeStory} />
        </div>

      </div>
    )
  }
}
// TODO: С периодом какая -то хня --- не сортирует!!
