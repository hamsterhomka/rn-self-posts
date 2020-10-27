import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import IPost from '../types/post';
import Post from './Post';

interface PostsListProps {
  posts: IPost[],
  onOpen: (post: IPost) => void,
}

const PostsList: React.FC<PostsListProps> = ({ posts, onOpen }) => {
  return (
    <View style={ styles.container }>
      <FlatList
        data={ posts }
        renderItem={ ({ item }) => <Post post={ item } onOpen={ onOpen } /> }
        keyExtractor={ (post) => post.id.toString() }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default PostsList
