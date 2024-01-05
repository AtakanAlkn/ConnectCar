import React from 'react';
import {View, Text} from 'react-native';

const Separator = () => {
  return (
    <View style={{flexDirection: 'row', marginTop: 20, alignItems: 'center'}}>
      <View style={{height: 1, backgroundColor: 'white', flex: 1}}></View>
      <Text style={{color: '#57728E', marginHorizontal: 20}}>veya</Text>
      <View style={{height: 1, backgroundColor: 'white', flex: 1}}></View>
    </View>
  );
};

export default Separator;
