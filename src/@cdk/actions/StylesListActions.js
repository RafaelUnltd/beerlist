import beerStylesResources from '../resources/beerStyles'

export const ActionTypes = {
  FETCH_STYLES: '@BrewListActions:FETCH_STYLES',
  FETCH_STYLES_ERROR: '@BrewListActions:FETCH_STYLES_ERROR',
  FETCH_STYLES_SUCCESS: '@BrewListActions:FETCH_STYLES_SUCCESS',
  SEARCH_STYLES: '@BrewListActions:SEARCH_STYLES'
}

export const fetchStyles = () => ({
  type: ActionTypes.FETCH_STYLES,
  isFetching: true,
  data: [],
  error: null
})

export const fetchStylesError = errorMessage => ({
  type: ActionTypes.FETCH_STYLES_ERROR,
  isFetching: false,
  data: [],
  error: errorMessage
})

export const fetchStylesSuccess = resultData => ({
  type: ActionTypes.FETCH_STYLES_SUCCESS,
  isFetching: false,
  data: resultData,
  error: null
})

export const searchStyles = text => ({
  type: ActionTypes.SEARCH_STYLES,
  text
})

export const requestStylesList = dispatch => async () => {
  dispatch(fetchStyles())

  const { data, status } = await beerStylesResources().list()

  if (status === 200) {
    dispatch(fetchStylesSuccess(data.data))
  } else {
    dispatch(fetchStylesError(data.status))
  }
}
