import React from 'react'
import styled from 'styled-components/native'

import Column from '../layout-components/Column'

const ListAdvice = props => (
  <Column
    vertical='center'
    horizontal='center'
  >
    <Column padding={25}>
      <AdviceText>{props.message}</AdviceText>
    </Column>
    <Separator />
  </Column>
)

export default ListAdvice

const AdviceText = styled.Text`
  color: #434343;
  font-weight: 300;
  font-size: 14;
  text-align: center;
`

const Separator = styled.View`
  border-bottom-width: 1;
  border-bottom-color: #D5D5D5;
  height: 0;
  width: 85;
`
