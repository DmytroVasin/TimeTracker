import axios from 'axios'

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
    type: 'TRAY_FETCH_STORIES_REQUEST'
  }
}
function fetchStoriesSuccess(stories) {
  return {
    type: 'TRAY_FETCH_STORIES_SUCCESS',
    payload: stories
  }
}
function fetchStoriesFailure(error) {
  return {
    type: 'TRAY_FETCH_STORIES_FAILURE',
    payload: error
  }
}



export function resetTimer() {
  return {
    type: 'RESET_TIMER'
  }
}
export function updateTimer(minutes) {
  return {
    type: 'UPDATE_TIMER',
    payload: minutes
  }
}
