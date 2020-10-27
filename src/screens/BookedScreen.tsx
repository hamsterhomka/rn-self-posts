import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack/lib/typescript/src/types';
import { DATA } from '../data';
import Post from '../components/Post';
import IPost from '../types/post';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import AppHeaderIcon from '../components/AppHeaderIcon';
import PostsList from '../components/PostsList';

interface IParams {

}

interface BookmarkedScreenProps {

}

const BookedScreen: NavigationStackScreenComponent<IParams> = ({ navigation }) => {
  const openPostHandler = (post: IPost): void => {
    navigation.navigate('Post', { id: post.id, date: post.date, booked: post.booked });
  };

  return (
    <PostsList posts={ DATA.filter((post) => post.booked) } onOpen={ openPostHandler } />
  );
};

BookedScreen.navigationOptions = ({ navigation }: { navigation: any }) => ({
  headerTitle: 'Избранное',
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={ AppHeaderIcon }>
      <Item title="Menu" iconName="ios-menu" onPress={ () => navigation.toggleDrawer() } />
    </HeaderButtons>
  )
});

const styles = StyleSheet.create({});

export default BookedScreen
