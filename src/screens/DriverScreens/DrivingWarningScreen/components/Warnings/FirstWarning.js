import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './WarningStyles';

const FirstWarning = () => {
  const hint =
    'Lütfen sürüş esnasında emniyet kemeri takılı olduğundan emin olun, hız sınırlarına uygun şekilde seyredin ve dikkatinizi yolda tutun.';
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={require('../../../../../assets/Images/first.png')} />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Güvenli Sürüş</Text>
        <Text style={styles.text}>{hint}</Text>
      </View>
    </View>
  );
};

export default FirstWarning;
