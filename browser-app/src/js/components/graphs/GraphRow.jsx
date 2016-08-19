import React, { Component } from 'react'
import { Link } from 'react-router'
import moment from 'moment'

import { GraphCell } from './GraphCell'

export class GraphRow extends Component {

  todayTasks = (day) => {
    let weekTasks = this.props.story.log_work
    let currentDay = moment().startOf('isoWeek').isoWeekday(day).format('YYYY/MM/DD')

    if (weekTasks[currentDay]) {
      return weekTasks[currentDay]
    } else {
      return []
    }
  }

  render() {
    const { story, index } = this.props

    return (
      <tr className={index % 2 == 0 ? null : 'even'}>

        <td className='issueType'>
          <i className={`fa fa-file-text ${story.story_type}`}></i>
        </td>

        <td className='summary' colSpan='2'>
          <Link to={`/stories/${story.id}`}>{story.title}</Link>
        </td>

        <GraphCell dayTasks={ this.todayTasks(1) } day='1' isDayOff='false' openGraphDialog={this.props.openGraphDialog} storyId={this.props.story.id}/>
        <GraphCell dayTasks={ this.todayTasks(2) } day='2' isDayOff='false' openGraphDialog={this.props.openGraphDialog} storyId={this.props.story.id}/>
        <GraphCell dayTasks={ this.todayTasks(3) } day='3' isDayOff='false' openGraphDialog={this.props.openGraphDialog} storyId={this.props.story.id}/>
        <GraphCell dayTasks={ this.todayTasks(4) } day='4' isDayOff='false' openGraphDialog={this.props.openGraphDialog} storyId={this.props.story.id}/>
        <GraphCell dayTasks={ this.todayTasks(5) } day='5' isDayOff='false' openGraphDialog={this.props.openGraphDialog} storyId={this.props.story.id}/>
        <GraphCell dayTasks={ this.todayTasks(6) } day='6' isDayOff='true' openGraphDialog={this.props.openGraphDialog} storyId={this.props.story.id}/>
        <GraphCell dayTasks={ this.todayTasks(7) } day='7' isDayOff='true' openGraphDialog={this.props.openGraphDialog} storyId={this.props.story.id}/>

        <td className='total'>2h</td>
      </tr>
    )
  }
}
