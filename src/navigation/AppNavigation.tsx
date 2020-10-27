import MainScreen from '../screens/MainScreen';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import PostScreen from '../screens/PostScreen';
import { THEME } from '../theme';
import { Platform } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack/lib/typescript/src/types';
import BookedScreen from '../screens/BookedScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import AboutScreen from '../screens/AboutScreen';
import CreateScreen from '../screens/CreateScreen';

const navigatorOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
    },
    headerStatusBarHeight: 48, //to fix top bar flashing
    headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
  },
};

const PostNavigator = createStackNavigator({
    Main: MainScreen,
    Post: PostScreen as NavigationStackScreenComponent,
  },
  navigatorOptions
);

const BookedNavigator = createStackNavigator({
    Booked: BookedScreen,
    Post: PostScreen as NavigationStackScreenComponent,
  },
  navigatorOptions
);

interface ITabBarIconProps {
  focused: boolean;
  tintColor?: string;
  horizontal?: boolean;
}

const bottomTabsConfig = {
  Post: {
    screen: PostNavigator,
    navigationOptions: {
      tabBarLabel: 'Все',
      tabBarIcon: (info: ITabBarIconProps) => <Ionicons name="ios-albums" size={ 25 } color={ info.tintColor } />
    },
  },
  Booked: {
    screen: BookedNavigator,
    navigationOptions: {
      tabBarLabel: 'Избранное',
      tabBarIcon: (info: ITabBarIconProps) => <Ionicons name="ios-star" size={ 25 } color={ info.tintColor } />
    }
  },
};

const BottomNavigator = Platform.OS === 'android'
  ? createMaterialBottomTabNavigator(
    bottomTabsConfig,
    {
      activeColor: '#fff',
      barStyle: {
        backgroundColor: THEME.MAIN_COLOR
      }
    })
  : createBottomTabNavigator(
    bottomTabsConfig,
    {
      tabBarOptions: {
        activeTintColor: THEME.MAIN_COLOR
      }
    });

const AboutNavigator = createStackNavigator({
  About: AboutScreen
}, navigatorOptions);

const CreateNavigator = createStackNavigator({
  Create: CreateScreen
}, navigatorOptions);

const MainNavigator = createDrawerNavigator({
  PostsTabs: {
    screen: BottomNavigator,
    navigationOptions: {
      drawerLabel: 'Главная',
      // drawerIcon: <Ionicons name="ios-star" />
    }
  },
  About: {
    screen: AboutNavigator,
    navigationOptions: {
      drawerLabel: 'О приложении',
    }
  },
  Create: {
    screen: CreateNavigator,
    navigationOptions: {
      drawerLabel: 'Новый пост',
    }
  },
}, {
  contentOptions: {
    activeTintColor: THEME.MAIN_COLOR,
    labelStyle: {
      fontFamily: 'open-bold',
    }
  }
});

export const AppNavigation = createAppContainer(MainNavigator);


