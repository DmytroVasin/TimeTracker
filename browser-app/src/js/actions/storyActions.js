import axios from 'axios'
import { push } from 'react-router-redux';

// INDEX
export function fetchStories() {
  return (dispatch) => {
    dispatch(toggleLoading(true))
    axios.get('https://peaceful-dawn-52251.herokuapp.com/stories.json')
    .then(function(response) {
      dispatch(setStories(response.data))
      dispatch(toggleLoading(false))
    })
  }
}


// SHOW
export function getStoryRequest(id) {
  return (dispatch) => {
    dispatch(toggleLoading(true))
    axios.get(`https://peaceful-dawn-52251.herokuapp.com/stories/${id}.json`)
    .then(function(response) {
      dispatch(getStorySuccess(response.data))
      dispatch(toggleLoading(false))
    })
  }
}


// CREATE
export function addStory(title, description, period) {
  return (dispatch) => {
    dispatch(toggleLoading(true))
    axios.post('https://peaceful-dawn-52251.herokuapp.com/stories.json', { title: title, description: description, period: period })
    .then(function(response) {
      // dispatch(receiveData(response.data))
      dispatch(toggleLoading(false))
      dispatch(push('/'))
    })
  }
}


// EDIT
export function updateStoryRequest(id, title, description) {
  return (dispatch) => {
    dispatch(toggleLoading(true))
    axios.patch("https://peaceful-dawn-52251.herokuapp.com/stories/" + id + ".json", { title: title, description: description })
    .then(function(response) {
      dispatch(updateStory(response))
      dispatch(toggleLoading(false))
    })
  }
}


// DELETE
export function removeStory(id) {
  return (dispatch) => {
    dispatch(toggleLoading(true))
    axios.delete("https://peaceful-dawn-52251.herokuapp.com/stories/" + id + ".json")
    .then(function() {
      dispatch(deleteStory(id))
      dispatch(toggleLoading(false))
    })
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



function toggleLoading(value) {
  return {
    type: 'LOADING_DATA',
    payload: value
  }
}

function setStories(stories) {
  return {
    type: 'SET_STORIES',
    payload: stories
  }
}

function deleteStory(story_id) {
  return {
    type: 'DELETE_STORY',
    payload: story_id
  }
}

function updateStory(story) {
  return {
    type: 'UPDATE_STORY',
    payload: story
  }
}

function getStorySuccess(story) {
  return {
    type: 'SHOW_STORY',
    payload: story
  }
}
