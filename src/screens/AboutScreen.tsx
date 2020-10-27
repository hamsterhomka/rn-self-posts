import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack/lib/typescript/src/types';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import AppHeaderIcon from '../components/AppHeaderIcon';
import MainScreen from './MainScreen';

const AboutScreen: NavigationStackScreenComponent<{}> = () => {
  return (
    <View style={ styles.container }>
      <Text>About  screen</Text>
    </View>
  );
};

AboutScreen.navigationOptions = ({ navigation }: { navigation: any }) => ({
  headerTitle: 'О приложении',
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

export default AboutScreen
