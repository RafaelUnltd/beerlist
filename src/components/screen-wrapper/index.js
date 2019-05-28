import React from 'react'
import { SafeAreaView } from 'react-navigation'
import styled from 'styled-components'

import Container from '../layout-components/Container'

const ScreenWrapper = props => (
  <ViewWrapper flex={1}>
    <SafeAreaView style={{ flex: 1, paddingTop: 10, paddingLeft: 10, paddingRight: 10 }} forceInset={{ bottom: 'never' }}>
      {props.children}
    </SafeAreaView>
  </ViewWrapper>
)

export default ScreenWrapper

const ViewWrapper = styled(Container)`
  background-color: #FAFAFA;
`
