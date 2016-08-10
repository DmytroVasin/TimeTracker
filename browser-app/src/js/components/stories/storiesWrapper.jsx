import React from 'react'

import { StoryPeriod } from './storyPeriod.jsx'
import { Spinner } from '../layout/spinner.jsx';

export class StoriesWrapper extends React.Component {
  getFilteredStories(stories, statusFilter) {
    switch (statusFilter) {
      case 'in_progress':
        return stories.filter(story => story.story_type == 'yellow');
      case 'estimated':
        return stories.filter(story => story.story_type == 'green');;
      case 'to_estimate':
        return stories.filter(story => story.story_type == 'grey');;
      default:
        return stories
    }
  }

  render () {
    const { stories, isLoading, statusFilter, sprintFilter } = this.props;
    const filteredStories = this.getFilteredStories(stories, statusFilter)

    return (
      <div id="stories-wrapper">
        {isLoading ? <Spinner />:null }

        <div className="stories-main">
          <StoryPeriod title='Sprint 26' periodStories={ filteredStories.filter(story => story.period == 1) } removeStory={this.props.actions.removeStory} />
          <StoryPeriod title='Spring 27' periodStories={ filteredStories.filter(story => story.period == 2) } removeStory={this.props.actions.removeStory} />
          <StoryPeriod title='Overdue'   periodStories={ filteredStories.filter(story => story.period == 3) } removeStory={this.props.actions.removeStory} />
        </div>

      </div>
    )
  }
}
