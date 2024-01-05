import React from 'react';
import {View, Text} from 'react-native';
import styles from './HomeScreenStyles';
import Button from '../../../components/Button';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Araçlar"
        onPress={() => navigation.navigate('DashboardScreen')}
      />
      <View style={{margin: 20}}></View>
      <Button
        title="Sürücüler"
        theme="secondary"
        onPress={() => {
          navigation.navigate('DriverManagementScreen');
        }}
      />
    </View>
  );
};

export default HomeScreen;
