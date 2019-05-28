import React from 'react'
import styled, { withTheme } from 'styled-components/native'

import { ActivityIndicator } from 'react-native'

const HistoryEmptyList = props => (
  <EmptyListWrapper>
    {
      props.isFetching
        ? <ActivityIndicator size='small' color={props.theme.colors.main} />
        : <EmptyListMessage color={props.theme.colors.main}>{'No results found for this query'}</EmptyListMessage>
    }
  </EmptyListWrapper>
)

export default withTheme(HistoryEmptyList)

const EmptyListWrapper = styled.View`
  background-color: transparent;
  justify-content: center;
  align-items: center;
  padding-top: 50;
`

const EmptyListMessage = styled.Text`
  font-weight: 400;
  font-size: 20;
  color: ${props => props.color ? props.color : '#434343'};
`
