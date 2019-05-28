import beerStylesResources from '../resources/beerStyles'

export const ActionTypes = {
  FETCH_STYLE: '@SingleStyleActions:FETCH_STYLE',
  FETCH_STYLE_ERROR: '@SingleStyleActions:FETCH_STYLE_ERROR',
  FETCH_STYLE_SUCCESS: '@SingleStyleActions:FETCH_STYLE_SUCCESS'
}

export const fetchStyle = () => ({
  type: ActionTypes.FETCH_STYLE,
  isFetching: true,
  data: null,
  error: null
})

export const fetchStyleError = errorMessage => ({
  type: ActionTypes.FETCH_STYLE_ERROR,
  isFetching: false,
  data: null,
  error: errorMessage
})

export const fetchStyleSuccess = resultData => ({
  type: ActionTypes.FETCH_STYLE_SUCCESS,
  isFetching: false,
  data: resultData,
  error: null
})

export const requestStyle = dispatch => async (id) => {
  dispatch(fetchStyle())

  const { data, status } = await beerStylesResources().get(id)

  if (status === 200) {
    dispatch(fetchStyleSuccess(data.data))
  } else {
    dispatch(fetchStyleError(data.status))
  }
}
