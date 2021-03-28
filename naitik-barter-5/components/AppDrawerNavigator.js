import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { TabNavigator } from './TabNavigator'
import customSideBarMenu  from './customSideBarMenu';
import SettingScreen from '../screens/SettingScreen'


export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : TabNavigator
    },
  Settings :{
    screen : SettingScreen
  },
  
},
{
    contentComponent:customSideBarMenu
  },
  {
    initialRouteName: 'Home'
      })
