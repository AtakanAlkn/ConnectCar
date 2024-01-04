import React from 'react';
import {View, Text} from 'react-native';
import UserSelectionScreen from './screens/UserSelectScreen';
import Router from './Router';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Router />
      <FlashMessage position="top" />
    </View>
  );
};

export default App;
