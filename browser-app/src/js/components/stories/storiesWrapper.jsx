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

        <div className="stories-main">
          <StoryPeriod title='Unscheduled' periodStories={ filteredStories.filter(story => story.period == -1) } removeStory={this.props.actions.removeStory} editStoryRequest={this.props.actions.editStoryRequest} getStoryRequest={this.props.actions.getStoryRequest} />
          <StoryPeriod title='String 0' periodStories={ filteredStories.filter(story => story.period == 0) } removeStory={this.props.actions.removeStory} editStoryRequest={this.props.actions.editStoryRequest} getStoryRequest={this.props.actions.getStoryRequest} />
          <StoryPeriod title='Sprint 1'   periodStories={ filteredStories.filter(story => story.period == 1) } removeStory={this.props.actions.removeStory} editStoryRequest={this.props.actions.editStoryRequest} getStoryRequest={this.props.actions.getStoryRequest} />
          <StoryPeriod title='Spring 2'   periodStories={ filteredStories.filter(story => story.period == 2) } removeStory={this.props.actions.removeStory} editStoryRequest={this.props.actions.editStoryRequest} getStoryRequest={this.props.actions.getStoryRequest} />
        </div>

      </div>
    )
  }
}
// TODO: С периодом какая -то хня --- не сортирует!!
