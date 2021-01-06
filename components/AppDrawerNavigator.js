import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import GenerateScreen from '../screens/GenerateScreen';
import SavedPasswordsScreen from '../screens/SavedPasswordsScreen';
import CustomSideBarMenu from './CustomSideBarMenu';

export const AppDrawerNavigator = createDrawerNavigator({
    Home : {
        screen : GenerateScreen
    },
    SavedPasswords : {
        screen : SavedPasswordsScreen
    },
},

{
    contentComponent : CustomSideBarMenu
},

    {
    initialRouteName : 'Home'
    },
    
)