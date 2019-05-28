import React from 'react'
import { Animated } from 'react-native'

import SplashView from '../views/SplashView'

class Splash extends React.PureComponent {
  constructor (props) {
    super(props)

    this.splashAnimation = new Animated.Value(0)

    this.navigateToList = this.navigateToList.bind(this)
  }

  componentDidMount () {
    setTimeout(() => Animated.timing(this.splashAnimation, {
      toValue: -100,
      duration: 1000
    }).start(), 1000)

    setTimeout(this.navigateToList, 4000)
  }

  navigateToList () {
    this.props.navigation.navigate('StyleList')
  }

  render () {
    return <SplashView splashAnimation={this.splashAnimation} />
  }
}

export default Splash
