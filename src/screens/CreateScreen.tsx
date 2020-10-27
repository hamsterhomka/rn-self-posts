import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import AppHeaderIcon from '../components/AppHeaderIcon';
import AboutScreen from './AboutScreen';
import { NavigationStackScreenComponent } from 'react-navigation-stack/lib/typescript/src/types';

const CreateScreen: NavigationStackScreenComponent<{}> = () => {
  return (
    <View style={ styles.container }>
      <Text>Create screen</Text>
    </View>
  );
};

CreateScreen.navigationOptions = ({ navigation }: { navigation: any }) => ({
  headerTitle: 'Создать пост',
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={ AppHeaderIcon }>
      <Item title="Take-photo" iconName="ios-camera" />
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CreateScreen
