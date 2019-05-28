import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'

import Row from '../layout-components/Row'
import Column from '../layout-components/Column'
import Container from '../layout-components/Container'
import ItemAvatar from './ItemAvatar'

const StyleListItem = props => (
  <Container
    paddingTop={7}
    paddingBottom={7}
    paddingRight={10}
    paddingLeft={10}
  >
    <TouchableOpacity onPress={props.onPress}>
      <Row>
        <ItemAvatar name={props.title} />
        <Column flex={1} paddingLeft={20}>
          <Title numberOfLines={1} ellipsizeMode='tail'>{props.title}</Title>
          <Description numberOfLines={2} ellipsizeMode='tail'>{props.description}</Description>
        </Column>
      </Row>
    </TouchableOpacity>
  </Container>
)

export default StyleListItem

const Title = styled.Text`
  font-weight: 600;
  color: ${props => props.theme.colors.main};
  font-size: 16;
  margin-bottom: 2;
`

const Description = styled.Text`
  font-weight: 300;
  color: #434343;
  font-size: 14;
`
