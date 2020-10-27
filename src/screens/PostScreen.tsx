import React, { useEffect } from 'react';
import { Alert, Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack/lib/typescript/src/types';
import { DATA } from '../data';
import { THEME } from '../theme';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import AppHeaderIcon from '../components/AppHeaderIcon';

interface IParams {
  id: string,
  date: string
  booked: boolean,
}

const PostScreen: NavigationStackScreenComponent<IParams> = ({ navigation }) => {
  const id = navigation.getParam('id');
  const post = DATA.find((postEl) => postEl.id === id);

  if (!post) {
    return (
      <View>Пост не существует</View>
    )
  }

  const removeHandler = () => {
    Alert.alert(
      'Удаление поста',
      'Вы точно хотите удалить пост?',
      [
        {
          text: 'Отменить',
          style: 'cancel'
        },
        {
          text: 'Удалить',
          style: 'destructive',
          onPress: () => console.log('удалить Pressed')
        }
      ],
      { cancelable: true }
    );
  };
  //
  // useEffect(() => {
  //   navigation.setParams({ booked: post.booked });
  // }, []);

  return (
    <ScrollView>
      <Image style={ styles.image } source={ { uri: post.img } } />
      <View style={ styles.textWrap }>
        <Text style={ styles.title }>{ post.text }</Text>
      </View>
      <Button title="Удалить" onPress={ removeHandler } color={ THEME.DANGER_COLOR } />
    </ScrollView>
  );
};

PostScreen.navigationOptions = ({ navigation }) => {
  const booked = navigation.getParam('booked');
  const iconName = booked ? 'ios-star' : 'ios-star-outline';

  return {
    headerTitle: `Пост от ${ new Date(navigation.getParam('date')).toLocaleDateString() }`,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={ AppHeaderIcon }>
        <Item title="Take-photo" iconName={ iconName } />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  textWrap: {
    padding: 10,
  },
  title: {
    fontFamily: 'open-regular'
  }
});

export default PostScreen
