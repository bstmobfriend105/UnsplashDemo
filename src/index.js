import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchPage from './components/searchPage';
import UserPage from './components/userPage';
import PhotoPage from './components/photoPage'

const MainNavigator = createStackNavigator({
    Search: {screen: SearchPage},
    User: {screen: UserPage},
    Photo: {screen: PhotoPage},
  }, {
    initialRouteName: 'Search'
  })
export default createAppContainer(MainNavigator);
