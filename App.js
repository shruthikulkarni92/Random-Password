import React from 'react';
import { Text, View } from 'react-native';
import GenerateScreen from './screens/GenerateScreen';
import LoginScreen from './screens/LoginScreen';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {AppDrawerNavigator} from './components/AppDrawerNavigator';
import SavedPasswordsScreen from './screens/SavedPasswordsScreen';


export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  
  Drawer : {screen : AppDrawerNavigator},
  LoginScreen:{screen:LoginScreen},
})

const AppContainer = createAppContainer(switchNavigator)

