const initialState = {

  storyList: {
    stories: [],
    error: null,
    loading: false
  },

  timer: {
    minutesPassed: null
  }

}

const reducer = function(state=initialState, action) {
  switch(action.type) {

    case 'TRAY_FETCH_STORIES_REQUEST':
      return { ...state, storyList: {stories: [], error: null, loading: true }}
    case 'TRAY_FETCH_STORIES_SUCCESS':
      return { ...state, storyList: {stories: action.payload, error: null, loading: false }}
    case 'TRAY_FETCH_STORIES_FAILURE':
      return { ...state, storyList: {stories: [], error: action.payload, loading: false }}



    case 'RESET_TIMER':
      return { ...state, timer: { minutesPassed: null }}
    case 'UPDATE_TIMER':
      return { ...state, timer: { minutesPassed: state.timer.minutesPassed + action.payload }}


    default:
      return state
  }
}

export default reducer
