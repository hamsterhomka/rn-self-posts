import React from 'react';
import { StyleSheet } from 'react-native';
import { DATA } from '../data';
import Post from '../components/Post';
import IPost from '../types/post';
import { NavigationStackScreenComponent } from 'react-navigation-stack/lib/typescript/src/types';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import AppHeaderIcon from '../components/AppHeaderIcon';
import PostsList from '../components/PostsList';

const MainScreen: NavigationStackScreenComponent<{}> = ({ navigation }) => {
  const openPostHandler = (post: IPost): void => {
    navigation.navigate('Post', { id: post.id, date: post.date, booked: post.booked });
  };

  return (
    <PostsList posts={ DATA } onOpen={ openPostHandler } />
  );
};

MainScreen.navigationOptions = ({ navigation }: { navigation: any }) => ({
  headerTitle: 'Мой блог',
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={ AppHeaderIcon }>
      <Item title="Take-photo" iconName="ios-camera" onPress={ () => navigation.push('Create') } />
    </HeaderButtons>
  ),
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={ AppHeaderIcon }>
      <Item title="Toggle-drawer" iconName="ios-menu" onPress={ () => navigation.toggleDrawer() } />
    </HeaderButtons>
  )
});

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default MainScreen
