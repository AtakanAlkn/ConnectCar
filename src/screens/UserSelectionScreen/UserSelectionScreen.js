import React from 'react';
import {View, StatusBar} from 'react-native';
import styles from './UserSelectionScreenStyles';
import Button from '../../components/Button';

const UserSelectionScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#253343" />
      <Button
        title="Yönetici"
        theme="secondary"
        onPress={() => navigation.navigate('ManagerLoginScreen')}
      />
      <View style={{margin: 10}}></View>
      <Button
        title="Sürücü"
        onPress={() => navigation.navigate('LoginScreen')}
      />
    </View>
  );
};

export default UserSelectionScreen;
