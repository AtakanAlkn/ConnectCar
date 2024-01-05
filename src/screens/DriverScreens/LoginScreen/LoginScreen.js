import React, {useState, useEffect} from 'react';
import {View, Text, Image, Keyboard, KeyboardAvoidingView} from 'react-native';
import styles from './LoginScreenStyles';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import database from '@react-native-firebase/database';
import {showMessage} from 'react-native-flash-message';
import parseData from '../../../utils/parseData';

const LoginScreen = ({navigation}) => {
  const [text, setText] = useState('');
  const [isEnable, setIsEnable] = useState(false);
  const reference = database().ref('/drivers');
  const [keyboard, setKeyboard] = useState(false);
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
          const parsedDriverInfo = parseData(driverData);
          navigation.navigate('DrivingWarningScreen', {parsedDriverInfo});
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

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboard(true);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboard(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../assets/Images/loginCar.png')}
            style={
              !keyboard
                ? styles.image
                : {...styles.image, width: 100, height: 100}
            }
          />
          <Text
            style={
              !keyboard ? styles.header : {...styles.header, fontSize: 20}
            }>
            Giriş Yap
          </Text>
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
