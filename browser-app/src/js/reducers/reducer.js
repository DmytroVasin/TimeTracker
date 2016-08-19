const initialState = {
  statusFilter: 'all',
  sprintFilter: 'all',

  activeStory: {
    story: null,
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
  },


  graphList: {
    stories: [{
      id: null,
      title: null,
      greedLog: {
        'Mon 17/Aug': [],
        'Tuh 18/Aug': [],
        'Wed 19/Aug': []
      }
    }],
    error: null,
    loading: false
  },

  graph: {
    graph: [],
    error: null,
    loading: false
  },



  graphDialog: {
    show: false,
    storyId: null,
    dialogTitleDate: '08/Jul/16',
    taskList: {
      tasks: [],
      error: null,
      loading: false
    },
    coordinates: {
      top: '305',
      right: '295'
    }
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





    case 'CREATE_TASK_SUCCESS':
      return { ...state, graphDialog: { ...state.graphDialog, taskList: {tasks: [...state.graphDialog.taskList.tasks, action.payload], error: null, loading: false}} }
    case 'CREATE_TASK_FAILURE':
      return { ...state, graphDialog: {tasks: [], error: action.payload, loading: false} }

    case 'DELETE_TASK_SUCCESS':
      return { ...state, graphDialog: { ...state.graphDialog, taskList: {tasks: [...state.graphDialog.taskList.tasks.filter(task => task.id !== action.payload.id)], error: null, loading: false}} }
    case 'DELETE_TASK_FAILURE':
      return { ...state, graphDialog: { ...state.graphDialog, taskList: {tasks: state.graphDialog.taskList.tasks, error: action.payload, loading: false}} }


    case 'TOGGLE_DIALOG':
      return { ...state, graphDialog: { ...state.graphDialog, show: action.payload.visiability, storyId: action.payload.storyId } }
    case 'SET_DIALOG_POSITION':
      return { ...state, graphDialog: { ...state.graphDialog, coordinates: { positionTop: action.payload.positionTop, positionRight: action.payload.positionRight }} }
    case 'SET_DIALOG_TITLE_DATE':
      return { ...state, graphDialog: { ...state.graphDialog, dialogTitleDate: action.payload } }

    case 'FETCH_STORY_TASKS_REQUEST':
      return { ...state, graphDialog: { ...state.graphDialog, taskList: {tasks: [], error: null, loading: true}} }
    case 'FETCH_STORY_TASKS_SUCCESS':
      return { ...state, graphDialog: { ...state.graphDialog, taskList: {tasks: action.payload, error: null, loading: false}} }
    case 'FETCH_STORY_TASKS_FAILURE':
      return { ...state, graphDialog: { ...state.graphDialog, taskList: {tasks: [], error: action.payload, loading: false}} }





    case 'FETCH_GRAPH_REQUEST':
      return { ...state, graph: {graph: [], error: null, loading: true} }
    case 'FETCH_GRAPH_SUCCESS':
      return { ...state, graph: {graph: action.payload, error: null, loading: false} }
    case 'FETCH_GRAPH_FAILURE':
      return { ...state, graph: {graph: [], error: action.payload, loading: false} }




    default:
      return state
  }
}

export default reducer
