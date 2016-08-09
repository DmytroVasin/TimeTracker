const initialState = {
  isLoading: false,
  fetching: false,
  fetched: false,
  users: [],
  error: null,
  statusFilter: 'all',
  sprintFilter: '-1',
  stories: []
}

const reducer = function(state=initialState, action) {
  switch(action.type) {

    case "LOADING_DATA":
      return Object.assign({}, state, { isLoading: action.payload })

    case "SET_STORIES":
      return Object.assign({}, state, { stories: [...action.payload] })

    // case "ADD_STORY":
    //   return Object.assign({}, state, { stories: [...state.stories, action.payload] })

    case "SET_STATUS_FILTER":
      return Object.assign({}, state, { statusFilter: action.payload })

    case "SET_SPRINT_FILTER":
      return Object.assign({}, state, { sprintFilter: action.payload })

    default:
      return state
  }
}

export default reducer
