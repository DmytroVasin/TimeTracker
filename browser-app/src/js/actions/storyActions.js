import axios from 'axios'
import { push } from 'react-router-redux';

export function fetchStories() {
  return (dispatch) => {
    dispatch(fetchStoriesRequest())
    axios.get('https://peaceful-dawn-52251.herokuapp.com/stories.json')
    .then(function(response) {
      dispatch(fetchStoriesSuccess(response.data))
    })
    .catch(function (error) {
      dispatch(fetchStoriesFailure(error.message))
    })
  }
}
function fetchStoriesRequest() {
  return {
    type: 'FETCH_STORIES_REQUEST'
  }
}
function fetchStoriesSuccess(stories) {
  return {
    type: 'FETCH_STORIES_SUCCESS',
    payload: stories
  }
}
function fetchStoriesFailure(error) {
  return {
    type: 'FETCH_STORIES_FAILURE',
    payload: error
  }
}



export function fetchPeriods() {
  return (dispatch) => {
    dispatch(fetchPeriodsRequest())
    axios.get('https://peaceful-dawn-52251.herokuapp.com/periods.json')
    .then(function(response) {
      dispatch(fetchPeriodsSuccess(response.data))
    })
    .catch(function (error) {
      dispatch(fetchPeriodsFailure(error.message))
    })
  }
}
function fetchPeriodsRequest() {
  return {
    type: 'FETCH_PERIODS_REQUEST'
  }
}
function fetchPeriodsSuccess(periods) {
  return {
    type: 'FETCH_PERIODS_SUCCESS',
    payload: periods
  }
}
function fetchPeriodsFailure(error) {
  return {
    type: 'FETCH_PERIODS_FAILURE',
    payload: error
  }
}



export function fetchStory(id) {
  return (dispatch, getState) => {
    dispatch(fetchStoryRequest())
    axios.get(`https://peaceful-dawn-52251.herokuapp.com/stories/${id}.json`)
    .then(function(response) {
      dispatch(fetchStorySuccess(response.data))
    })
    .catch(function (error) {
      dispatch(fetchStoryFailure(error.message))
    })
  }
}
function fetchStoryRequest() {
  return {
    type: 'FETCH_STORY_REQUEST'
  }
}
function fetchStorySuccess(story) {
  return {
    type: 'FETCH_STORY_SUCCESS',
    payload: story
  }
}
function fetchStoryFailure(error) {
  return {
    type: 'FETCH_STORY_FAILURE',
    payload: error
  }
}



export function deleteStory(id) {
  return (dispatch) => {
    dispatch(deleteStoryRequest())
    axios.delete(`https://peaceful-dawn-52251.herokuapp.com/stories/${id}.json`)
    .then(function(response) {
      dispatch(deleteStorySuccess(response.data))
    })
    .catch(function (error) {
      dispatch(deleteStoryFailure(error.message))
    })
  }
}
function deleteStoryRequest() {
  return {
    type: 'DELETE_STORY_REQUEST'
  }
}
function deleteStorySuccess(story) {
  return {
    type: 'DELETE_STORY_SUCCESS',
    payload: story
  }
}
function deleteStoryFailure(error) {
  return {
    type: 'DELETE_STORY_FAILURE',
    payload: error
  }
}



export function createStory(story) {
  return (dispatch) => {
    dispatch(createStoryRequest())
    axios.post('https://peaceful-dawn-52251.herokuapp.com/stories.json', { title: story.title, description: story.description, period_id: story.period_id, story_type: story.story_type })
    .then(function(response) {
      dispatch(createStorySuccess(response.data))
      dispatch(push('/'))
    })
    .catch(function (error) {
      dispatch(createStoryFailure(error.message))
    })
  }
}
function createStoryRequest() {
  return {
    type: 'CREATE_STORY_REQUEST'
  }
}
function createStorySuccess(story) {
  return {
    type: 'CREATE_STORY_SUCCESS',
    payload: story
  }
}
function createStoryFailure(error) {
  return {
    type: 'CREATE_STORY_FAILURE',
    payload: error
  }
}



export function updateStory(story) {
  return (dispatch) => {
    dispatch(updateStoryRequest())
    axios.patch(`https://peaceful-dawn-52251.herokuapp.com/stories/${story.id}.json`, { title: story.title, description: story.description, period_id: story.period_id, story_type: story.story_type })
    .then(function(response) {
      dispatch(updateStorySuccess(response.data))
      dispatch(push('/'))
    })
    .catch(function (error) {
      dispatch(updateStoryFailure(error.message))
    })
  }
}
function updateStoryRequest() {
  return {
    type: 'UPDATE_STORY_REQUEST'
  }
}
function updateStorySuccess(story) {
  return {
    type: 'UPDATE_STORY_SUCCESS',
    payload: story
  }
}
function updateStoryFailure(error) {
  return {
    type: 'UPDATE_STORY_FAILURE',
    payload: error
  }
}



export function setStatusFilter(filter) {
  return {
    type: 'SET_STATUS_FILTER',
    payload: filter
  }
}



export function setSprintFilter(filter) {
  return {
    type: 'SET_SPRINT_FILTER',
    payload: filter
  }
}



export function hideDialog() {
  return (dispatch) => {
    dispatch(toggleDialog(false, null))
    dispatch(fetchStoriesTasksSuccess([]))
  }
}

export function openGraphDialog(storyId, dialogTitleDate, coordinates, currentCellTasks) {
  return (dispatch) => {
    dispatch(toggleDialog(true, storyId))
    dispatch(setDialogPosition(coordinates))
    dispatch(setDialogTitleDate(dialogTitleDate))
    dispatch(fetchStoriesTasksSuccess(currentCellTasks))

    // axios.get(`https://peaceful-dawn-52251.herokuapp.com/stories/${storyId}/tasks.json?task_date=${taskDate}`)
    // .then(function(response) {
    //   dispatch(fetchStoriesTasksSuccess(response.data))
    // })
    // .catch(function (error) {
    //   dispatch(fetchStoriesTasksFailure(error.message))
    // })
  }
}
function toggleDialog(visiability, storyId) {
  return {
    type: 'TOGGLE_DIALOG',
    payload: {visiability: visiability, storyId: storyId}
  }
}
function setDialogTitleDate(dialogTitleDate) {
  return {
    type: 'SET_DIALOG_TITLE_DATE',
    payload: dialogTitleDate
  }
}
function setDialogPosition(coordinates) {
  return {
    type: 'SET_DIALOG_POSITION',
    payload: {positionTop: coordinates.positionTop, positionRight: coordinates.positionRight}
  }
}
function fetchStoriesTasksRequest() {
  return {
    type: 'FETCH_STORY_TASKS_REQUEST'
  }
}
function fetchStoriesTasksSuccess(tasks) {
  return {
    type: 'FETCH_STORY_TASKS_SUCCESS',
    payload: tasks
  }
}
function fetchStoriesTasksFailure(error) {
  return {
    type: 'FETCH_STORY_TASKS_FAILURE',
    payload: error
  }
}



export function createTask(storyId, task) {
  return (dispatch) => {
    axios.post(`https://peaceful-dawn-52251.herokuapp.com/stories/${storyId}/tasks.json`, { time: task.time, comment: task.comment })
    .then(function(response) {
      dispatch(createTaskSuccess(response.data))
    })
    .catch(function (error) {
      dispatch(createTaskFailure(error.message))
    })
  }
}
function createTaskSuccess(task) {
  return {
    type: 'CREATE_TASK_SUCCESS',
    payload: task
  }
}
function createTaskFailure(error) {
  return {
    type: 'CREATE_TASK_FAILURE',
    payload: error
  }
}




export function deleteTask(storyId, taskId) {
  return (dispatch) => {
    axios.delete(`https://peaceful-dawn-52251.herokuapp.com/stories/${storyId}/tasks/${taskId}.json`)
    .then(function(response) {
      dispatch(deleteTaskSuccess(response.data))
    })
    .catch(function (error) {
      dispatch(deleteTaskFailure(error.message))
    })
  }
}
function deleteTaskSuccess(task) {
  return {
    type: 'DELETE_TASK_SUCCESS',
    payload: task
  }
}
function deleteTaskFailure(error) {
  return {
    type: 'DELETE_TASK_FAILURE',
    payload: error
  }
}




export function fetchGraph() {
  return (dispatch) => {
    dispatch(fetchGraphRequest())
    axios.get('https://peaceful-dawn-52251.herokuapp.com/graph.json')
    .then(function(response) {
      dispatch(fetchGraphSuccess(response.data))
    })
    .catch(function (error) {
      dispatch(fetchGraphFailure(error.message))
    })
  }
}
function fetchGraphRequest() {
  return {
    type: 'FETCH_GRAPH_REQUEST'
  }
}
function fetchGraphSuccess(graph) {
  return {
    type: 'FETCH_GRAPH_SUCCESS',
    payload: graph
  }
}
function fetchGraphFailure(error) {
  return {
    type: 'FETCH_GRAPH_FAILURE',
    payload: error
  }
}

