import React from 'react'
import { Animated, Image } from 'react-native'
import styled from 'styled-components'

import Column from '../components/layout-components/Column'

const SplashView = props => (
  <SplashWrapper
    vertical='center'
    horizontal='center'
    flex={1}
  >
    <Animated.View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{ translateY: props.splashAnimation }]
      }}
    >
      <Image
        style={{ height: 100, width: 100 }}
        source={require('./../assets/logo.png')}
      />
      <Animated.View style={{ opacity: props.splashAnimation.interpolate({ inputRange: [-100, 0], outputRange: [1, 0] }) }}>
        <Image
          style={{ height: 74, width: 200 }}
          source={require('./../assets/beerlist_name.png')}
        />
      </Animated.View>
    </Animated.View>
  </SplashWrapper>
)

export default SplashView

const SplashWrapper = styled(Column)`
  background-color: ${props => props.theme.colors.main};
`
