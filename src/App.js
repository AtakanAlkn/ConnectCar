import React from 'react';
import {View, Text} from 'react-native';
import UserSelectionScreen from './screens/UserSelectionScreen';
import Router from './Router';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Router />
    </View>
  );
};

export default App;
