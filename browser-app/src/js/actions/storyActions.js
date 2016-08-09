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

// CREATE
export function addStory(title, description) {
  return (dispatch) => {
    dispatch(toggleLoading(true))
    axios.post('https://peaceful-dawn-52251.herokuapp.com/stories.json', { title: title, description: description })
    .then(function(response) {
      // dispatch(receiveData(response.data))
      // dispatch(toggleLoading(false))
      // dispatch(push('/'))
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
};

// function receiveData(story) {
//   return {
//     type: 'ADD_STORY',
//     payload: story
//   }
// };
