import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './ManagerLoginScreenStyles';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Separator from './components/Separator';
import Icon from 'react-native-vector-icons/Foundation';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

const ManagerLoginScreen = ({navigation}) => {
  const [isEnable, setIsEnable] = useState(false);
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const onMailChange = newMail => {
    setMail(newMail);
  };
  const onPasswordChange = newPassword => {
    setPassword(newPassword);
  };

  const onLogIn = () => {
    if (mail && password) {
      setIsEnable(true);
      auth()
        .signInWithEmailAndPassword(mail, password)
        .then(() => {
          navigation.navigate('DashboardScreen');
          setIsEnable(false);
        })
        .catch(er => {
          showMessage({
            message: 'Hatalı Giriş',
            type: 'danger',
          });
          setIsEnable(false);
        });
    } else {
      showMessage({
        message: 'Lütfen tüm alanları doldurun',
        type: 'danger',
      });
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.loginText}>Giriş Yap</Text>
        <Text style={styles.text}>
          Mail ve şifre ile giriş yapınız.Yönetici değilseniz önceki menüye
          dönün.
        </Text>
        <Text style={styles.text}></Text>
        <Text style={styles.hint}>Mail adresinizi giriniz</Text>
        <Input onChangeText={onMailChange} />
        <View style={{height: 15}}></View>
        <Text style={styles.hint}>Şifrenizi giriniz</Text>
        <Input onChangeText={onPasswordChange} secureTextEntry={true} />
        <View style={{height: 30}}></View>
        <Button title="Giriş Yap" onPress={onLogIn} disabled={isEnable} />
      </View>

      <View style={styles.bottomContainer}>
        <Separator />
        <View style={{height: 20}}></View>
        <View style={styles.support}>
          <Button title="Canlı Destek" theme="outline" />
          <Icon name="telephone" size={30} color="#00B86B" />
        </View>
      </View>
    </View>
  );
};

export default ManagerLoginScreen;
