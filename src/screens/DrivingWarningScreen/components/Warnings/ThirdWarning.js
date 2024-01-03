import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './WarningStyles';
import Button from '../../../../components/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ThirdWarning = () => {
  const hint =
    '  Sürüş esnasında, uygulamamız size yolculuk bilgileri sunar. Mesafe, hız, varış süresi gibi bilgiler, sürüşünüzü daha iyi planlamanıza yardımcı olur.';
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={require('../../../../assets/Images/third.png')} />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Yolculuk Bilgilendirmesi</Text>
        <Text style={styles.text}>{hint}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00B86B',
            borderRadius: 10,
            paddingHorizontal: 10,
            marginTop: 10,
          }}>
          <Button title="Sürüşe Başla" />
          <Icon name="steering" size={30} color="white" />
        </View>
      </View>
    </View>
  );
};

export default ThirdWarning;
