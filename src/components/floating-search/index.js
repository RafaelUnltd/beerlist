import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import styled, { withTheme } from 'styled-components/native'

import Row from '../layout-components/Row'

const FloatingSearch = props => (
  <SearchWrapper
    vertical='center'
    horizontal='space-between'
    paddingLeft={28}
    paddingRight={22}
    padding={16}
    width='100%'
  >
    <SearchInput
      placeholder='Search by style name'
      placeholderTextColor={props.theme.colors.main}
      onChangeText={props.handleSearchChange}
    />
    <Icon
      name='search'
      size={22}
      color={props.theme.colors.main}
    />
  </SearchWrapper>
)

export default withTheme(FloatingSearch)

const SearchWrapper = styled(Row)`
  background-color: white;
  border-radius: 5;

  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84;

  elevation: 5;
`

const SearchInput = styled.TextInput`
  color: ${props => props.theme.colors.main};
  font-weight: 500;
  padding: 0;
  margin: 0;
  flex: 1;
`
