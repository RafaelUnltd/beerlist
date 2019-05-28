import { createStackNavigator, createAppContainer } from 'react-navigation'

import BrewList from './containers/BrewList'
import Splash from './containers/Splash'
import SingleStyle from './containers/SingleStyle'

const AppNavigator = createStackNavigator({
  Home: Splash,
  StyleList: BrewList,
  SingleStyle: SingleStyle
}, {
  headerMode: 'none'
})

export default createAppContainer(AppNavigator)
