import * as React from 'react';
import { View } from 'react-native'
import data from './config';
import HomeScreen from './Screens/HomeScreen';
import NewsScreen from './Screens/NewsScreen';
import JokeScreen from './Screens/JokeScreen';
import WeatherScreen from './Screens/WeatherScreen';
import HoroScope from './Screens/HoroScope'; 

import {createSwitchNavigator,createAppContainer} from 'react-navigation'



export default class App extends React.Component {
  render() {
    return (
      <View>
     <AppContainer/>
      </View>
    );
  }
}

var AppNavigator=createSwitchNavigator({ 
HomeScreen:HomeScreen,
NewsScreen:NewsScreen,
JokeScreen:JokeScreen,
WeatherScreen:WeatherScreen,
HoroScope:HoroScope 
})
const AppContainer=createAppContainer(AppNavigator)

