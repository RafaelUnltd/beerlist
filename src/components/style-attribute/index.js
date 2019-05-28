import React from 'react'
import styled from 'styled-components/native'

import Column from '../layout-components/Column'

const StyleAttribute = props => (
  <Column
    paddingRight={10}
    paddingLeft={10}
    marginBottom={15}
    width={!props.row && '100%'}
    flex={props.row && 1}
  >
    <Title>{props.title}</Title>
    <Description>{props.description}</Description>
  </Column>
)

export default StyleAttribute

const Title = styled.Text`
  font-size: 16;
  font-weight: 600;
  color: ${props => props.theme.colors.main};
  margin-bottom: 3;
`

const Description = styled.Text`
  font-size: 16;
  font-weight: 200;
  color: #434343;
`
