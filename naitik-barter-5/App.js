import React, {Component} from 'react' 
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer,createSwitchNavigator } from "react-navigation"; 
import WelcomeScreen from './screens/WelcomeScreen'
import { AppDrawerNavigator } from './components/AppDrawerNavigator'
import { TabNavigator } from './components/TabNavigator' 
import {SafeAreaProvider} from "react-native-safe-area-context";

export default class App extends React.Component {
render(){
  return( 
    <SafeAreaProvider>
  <AppContainer/>
    </SafeAreaProvider>
  ) 
}
}

const switchNavigator=createSwitchNavigator({
  WelcomeScreen: {screen: WelcomeScreen},
  Drawer:{screen: AppDrawerNavigator},
  BottomTab:{screen:TabNavigator},
})

const AppContainer = createAppContainer(switchNavigator);