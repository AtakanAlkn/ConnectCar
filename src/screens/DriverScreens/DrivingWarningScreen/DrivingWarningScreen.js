import React from 'react';
import {View} from 'react-native';
import styles from './DrivingWarningScreenStyles';
import FirstWarning from './components/Warnings/FirstWarning';
import SecondWarning from './components/Warnings/SecondWarning';
import ThirdWarning from './components/Warnings/ThirdWarning';
import Swiper from 'react-native-swiper';

const DrivingWarningScreen = ({navigation, route}) => {
  const {driverInfo} = route.params;
  const onStart = () => {
    navigation.navigate('CarSelectScreen', {driverInfo});
  };
  return (
    <View style={styles.container}>
      <Swiper
        loop={false}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}>
        <FirstWarning />
        <SecondWarning />
        <ThirdWarning onPress={onStart} />
      </Swiper>
    </View>
  );
};

export default DrivingWarningScreen;
