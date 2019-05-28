import React from 'react'
import SingleStyleView from '../views/SingleStyleView'

const SingleStyle = props => (
  <SingleStyleView
    styleId={props.navigation.getParam('id')}
    pop={() => props.navigation.goBack()}
  />
)

export default SingleStyle
