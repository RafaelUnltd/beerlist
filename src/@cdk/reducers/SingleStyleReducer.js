import { ActionTypes } from '../actions/SingleStyleActions'

const initialState = {
  isFetching: false,
  data: [],
  error: null
}

const SingleStyleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_STYLE:
    case ActionTypes.FETCH_STYLE_ERROR:
    case ActionTypes.FETCH_STYLE_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        data: action.data,
        error: action.error,
        filteredData: null
      }
    default:
      return state
  }
}

export default SingleStyleReducer
