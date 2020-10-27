import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import IPost from '../types/post';

interface IPostProps {
  post: IPost,
  onOpen: (post: IPost) => void,
}

const Post: React.FC<IPostProps> = ({ post, onOpen }) => {
  return (
    <TouchableOpacity style={ styles.container } onPress={ () => onOpen(post) }>
      <ImageBackground style={ styles.image } source={ { uri: post.img } }>
        <View style={ styles.textWrap }>
          <Text style={ styles.title }>{ new Date(post.date).toLocaleDateString() }</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  textWrap: {
    backgroundColor: 'rgba(0,0,0,.5)',
    paddingVertical: 5,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    color: '#fff',
    fontFamily: 'open-regular',
  }
});

export default Post
