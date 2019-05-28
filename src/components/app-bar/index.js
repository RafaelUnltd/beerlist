import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import styled, { withTheme } from 'styled-components/native'

import Row from '../layout-components/Row'

const AppBar = props => (
  <AppBarWrapper
    vertical='center'
    horizontal='space-between'
    paddingLeft={22}
    paddingRight={28}
    padding={16}
    width='100%'
  >
    <TouchableOpacity onPress={props.actionButtonPress}>
      <Icon
        name={props.icon}
        size={20}
        color='#FFF'
      />
    </TouchableOpacity>
    <Title numberOfLines={1} ellipsizeMode='tail'>{props.title}</Title>
  </AppBarWrapper>
)

export default withTheme(AppBar)

const AppBarWrapper = styled(Row)`
  background-color: ${props => props.theme.colors.main};
  border-radius: 5;

  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84;

  elevation: 5;
`

const Title = styled.Text`
  color: white;
  font-size: 16;
  font-weight: 600;
  padding-left: 20;
  flex: 1;
`
