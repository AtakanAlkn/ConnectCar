import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './LoginScreenStyles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/Images/LoginCar.png')}
            style={styles.image}
          />
          <Text style={styles.header}>Giriş Yap</Text>
        </View>
        <View>
          <Text style={styles.hint}>Sürücü kimliğinizi girin</Text>
          <Input />
          <View style={{height: 30}}></View>
          <Button
            title="Giriş Yap"
            onPress={() => navigation.navigate('DrivingWarningScreen')}
          />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
