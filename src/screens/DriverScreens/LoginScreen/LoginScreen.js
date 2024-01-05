import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './LoginScreenStyles';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import database from '@react-native-firebase/database';
import {showMessage} from 'react-native-flash-message';

const LoginScreen = ({navigation}) => {
  const [text, setText] = useState('');
  const [isEnable, setIsEnable] = useState(false);
  const reference = database().ref('/drivers');

  reference.once('value').then(snapshot => {});

  const handleLogin = () => {
    setIsEnable(true);
    if (!text) {
      showMessage({
        message: 'Sürücü kimliğinizi girin',
        type: 'warning',
      });
      setIsEnable(false);
      return;
    }
    reference
      .orderByChild('key')
      .equalTo(text)
      .once('value')
      .then(snapshot => {
        if (snapshot.exists()) {
          const driverData = snapshot.val();
          const driverKey = Object.keys(driverData)[0];
          const driverInfo = driverData[driverKey];
          navigation.navigate('DrivingWarningScreen', {driverInfo});
          setIsEnable(false);
        } else {
          showMessage({
            message: 'Sürücü bulunamadı',
            type: 'danger',
          });
          setIsEnable(false);
        }
      })
      .catch(error => {
        showMessage({
          message: error.name,
          type: 'danger',
        });
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../assets/Images/loginCar.png')}
            style={styles.image}
          />
          <Text style={styles.header}>Giriş Yap</Text>
        </View>
        <View>
          <Text style={styles.hint}>Sürücü kimliğinizi girin</Text>
          <Input onChangeText={setText} />
          <View style={{height: 30}}></View>
          <Button title="Giriş Yap" onPress={handleLogin} disabled={isEnable} />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
