import { ActionTypes } from '../actions/StylesListActions'

const initialState = {
  isFetching: false,
  data: [],
  error: null,
  filteredData: null
}

const filterStyles = (data, text) => {
  if (text !== '') {
    const lowercaseText = text.toLowerCase()

    return data.filter(item => {
      const containsInName = (item.name && item.name.toLowerCase().includes(lowercaseText))
      const containsInShortName = (item.shortName && item.shortName.toLowerCase().includes(lowercaseText))

      return containsInName || containsInShortName
    })
  }

  return null
}

const StylesListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_STYLES:
    case ActionTypes.FETCH_STYLES_ERROR:
    case ActionTypes.FETCH_STYLES_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        data: action.data,
        error: action.error,
        filteredData: null
      }
    case ActionTypes.SEARCH_STYLES:
      return {
        ...state,
        filteredData: filterStyles(state.data, action.text)
      }
    default:
      return state
  }
}

export default StylesListReducer
