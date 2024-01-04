import React from 'react';
import {View, Text} from 'react-native';
import styles from './DriveScreenStyles';

const DriveScreen = ({route}) => {
  const {brand} = route.params.item;
  return (
    <View style={styles.container}>
      <Text> {brand}</Text>
    </View>
  );
};

export default DriveScreen;
