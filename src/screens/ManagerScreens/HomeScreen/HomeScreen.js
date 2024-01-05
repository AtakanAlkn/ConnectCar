import React from 'react';
import {View, Text} from 'react-native';
import styles from './HomeScreenStyles';
import Button from '../../../components/Button';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Araçlar"
        theme="secondary"
        onPress={() => navigation.navigate('DashboardScreen')}
      />
      <View style={{margin: 10}}></View>
      <Button
        title="Sürücüler"
        onPress={() => {
          navigation.navigate('DriverManagementScreen');
        }}
      />
    </View>
  );
};

export default HomeScreen;
