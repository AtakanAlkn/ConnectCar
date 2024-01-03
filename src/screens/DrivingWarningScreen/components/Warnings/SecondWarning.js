import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './WarningStyles';

const SecondWarning = () => {
  const hint =
    '  Uygulamamız, sürüşlerinizi kaydederek size daha iyi bir deneyim sunar. Bu kayıtlar, sürüş alışkanlıklarınızı anlamanıza ve geliştirmenize yardımcı olur. ';
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={require('../../../../assets/Images/second.png')} />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Sürüş Kaydı</Text>
        <Text style={styles.text}>{hint}</Text>
      </View>
    </View>
  );
};

export default SecondWarning;
