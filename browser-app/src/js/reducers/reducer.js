const initialState = {
  statusFilter: 'all',
  sprintFilter: 'all',

  activeStory: {
    story: { title: '', description: '', period_id: '', story_type: 'to_estimate' },
    error: null,
    loading: false
  },

  storyList: {
    stories: [],
    error: null,
    loading: false
  },

  periodList: {
    periods: [],
    error: null,
    loading: false
  }
}

const reducer = function(state=initialState, action) {
  switch(action.type) {

    case 'SET_STATUS_FILTER':
      return { ...state, statusFilter: action.payload }

    case 'SET_SPRINT_FILTER':
      return { ...state, sprintFilter: action.payload }



    case 'FETCH_STORIES_REQUEST':
      return { ...state, storyList: {stories: [], error: null, loading: true} }
    case 'FETCH_STORIES_SUCCESS':
      return { ...state, storyList: {stories: action.payload, error: null, loading: false} }
    case 'FETCH_STORIES_FAILURE':
      return { ...state, storyList: {stories: [], error: action.payload, loading: false} }



    case 'FETCH_STORY_REQUEST':
      return { ...state, activeStory: {story: null, error: null, loading: true} }
    case 'FETCH_STORY_SUCCESS':
      return { ...state, activeStory: {story: action.payload, error: null, loading: false} }
    case 'FETCH_STORY_FAILURE':
      return { ...state, activeStory: {story: null, error: action.payload, loading: false} }



    case 'UPDATE_STORY_REQUEST':
      return { ...state, activeStory: {story: null, error: null, loading: true} }
    case 'UPDATE_STORY_SUCCESS':
      return { ...state,
        storyList: {stories: state.storyList.stories.map(story => story.id === action.payload.id ? action.payload : story), error: null, loading: false },
        activeStory: {story: action.payload, error: null, loading: false}
      }
    case 'UPDATE_STORY_FAILURE':
      return { ...state, activeStory: {story: null, error: action.payload, loading: false} }



    case 'CREATE_STORY_REQUEST':
      return { ...state, activeStory: {story: null, error: null, loading: true} }
    case 'CREATE_STORY_SUCCESS':
      return { ...state,
        storyList: {stories: [...state.storyList.stories, action.payload], error: null, loading: false },
        activeStory: {story: action.payload, error: null, loading: false}
      }
    case 'CREATE_STORY_FAILURE':
      return { ...state, activeStory: {story: null, error: action.payload, loading: false} }



    case 'DELETE_STORY_REQUEST':
      return { ...state, active: {story: null, error: null, loading: true} }
    case 'DELETE_STORY_SUCCESS':
      return { ...state,
        storyList: {stories: state.storyList.stories.filter(story => story.id !== action.payload.id), error: null, loading: false },
        activeStory: {story: action.payload, error: null, loading: false}
      }
    case 'DELETE_STORY_FAILURE':
      return { ...state, active: {story: null, error: action.payload, loading: false} }



    case 'FETCH_PERIODS_REQUEST':
      return { ...state, periodList: {periods: [], error: null, loading: true} }
    case 'FETCH_PERIODS_SUCCESS':
      return { ...state, periodList: {periods: action.payload, error: null, loading: false} }
    case 'FETCH_PERIODS_FAILURE':
      return { ...state, periodList: {periods: [], error: action.payload, loading: false} }

    default:
      return state
  }
}

export default reducer
