import React from 'react'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import StylesListReducer from '../@cdk/reducers/StylesListReducer'
import SingleStyleReducer from '../@cdk/reducers/SingleStyleReducer'

const Reducers = combineReducers({
  stylesListState: StylesListReducer,
  singleStyleState: SingleStyleReducer
})
const Store = createStore(Reducers)

const StorageProvider = props => (
  <Provider store={Store}>
    {props.children}
  </Provider>
)

export default StorageProvider
