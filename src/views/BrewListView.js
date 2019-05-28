import React from 'react'
import { SafeAreaView } from 'react-navigation'
import styled from 'styled-components/native'

import FloatingSearch from '../components/floating-search'
import ListAdvice from '../components/list-advice'
import StyleList from '../components/style-list'
import Container from '../components/layout-components/Container'

const BrewListView = props => (
  <ViewWrapper flex={1}>
    <SafeAreaView style={{ flex: 1, paddingTop: 10, paddingLeft: 10, paddingRight: 10 }} forceInset={{ bottom: 'never' }}>
      <React.Fragment>
        <FloatingSearch handleSearchChange={props.handleSearchChange} />
        <ListAdvice message='Click a style to see details' />
        <StyleList navigateToDetail={props.navigateToDetail} />
      </React.Fragment>
    </SafeAreaView>
  </ViewWrapper>
)

export default BrewListView

const ViewWrapper = styled(Container)`
  background-color: #FAFAFA;
`
