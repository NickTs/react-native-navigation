import Icons from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import CustomDrawerNavigator from './components/CustomDrawerNavigator';
import Home from './views/Home';
import Settings from './views/Settings';
import About from './views/About';

const MainNavigator = createDrawerNavigator(
  {
    Home: {
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icons name="home" style={{color: tintColor}} />
        ),
        drawerLabel: 'Home',
      },
      screen: Home,
    },

    Settings: {
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icons name="gear" style={{color: tintColor}} />
        ),
        drawerLabel: 'Settings',
      },
      screen: Settings,
    },

    About: {
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icons name="search" style={{color: tintColor}} />
        ),
        drawerLabel: 'About',
      },
      screen: About,
    },
  },
  {
    contentComponent: CustomDrawerNavigator,
  },
);

const MainApp = createAppContainer(MainNavigator);
export default MainApp;
