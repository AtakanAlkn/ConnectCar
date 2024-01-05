import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styles from './DriverInputModalStyles';
import Button from '../../Button';
import Modal from 'react-native-modal';
import DropDownPicker from 'react-native-dropdown-picker';
import ModalInput from '../CarInputModal/component/ModalInput/ModalInput';
import keyCreator from '../../../utils/keyCreator';
import Clipboard from '@react-native-clipboard/clipboard';
import {showMessage} from 'react-native-flash-message';

//Fix (Formik)
const DriverInputModal = ({isVisible, onSend, onClose}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [modalKey, setModalKey] = useState('');
  const [open, setOpen] = useState(false);
  const [gender, setGender] = useState(null);
  const [items, setItems] = useState([
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
  ]);

  const handleSend = async () => {
    if (!name || !age || !gender) {
      showMessage({
        message: 'Lütfen tüm alanları doldurun.',
        type: 'warning',
      });
      return;
    }
    const generatedKey = await keyCreator(name);
    setModalKey(generatedKey);
    const dataToSend = {
      key: generatedKey,
      name: name,
      gender: gender,
      age: age,
      wrong: '',
      time: '',
    };
    onSend(dataToSend);
    setGender(null);
    setName('');
    setAge('');
  };

  return (
    <View>
      <Modal
        style={styles.modal}
        swipeDirection="down"
        isVisible={isVisible}
        onSwipeCancel={onClose}
        onBackdropPress={onClose}
        onBackButtonPress={onClose}>
        <View style={styles.container}>
          <Text style={styles.header}>Sürücü Kayıt Ekranı</Text>
          <View>
            <ModalInput placeholder="İsim Soyisim" onChangeText={setName} />
            <ModalInput placeholder="Yaş" onChangeText={setAge} />
            <DropDownPicker
              open={open}
              value={gender}
              items={items}
              setOpen={setOpen}
              setValue={setGender}
              setItems={setItems}
              placeholder="Cinsiyet"
              style={{marginVertical: 4, marginBottom: 8}}
            />
          </View>
          <Button title="Ekle" onPress={handleSend} />
        </View>
      </Modal>
      <Modal style={styles.modal} isVisible={Boolean(modalKey)}>
        <View style={styles.container2}>
          <Text style={styles.text}>
            Lütfen anahtarı kaybetmeyeceğiniz bir şekilde saklayınız. Anahtarı
            üzerine basarak kopyalayınız.
          </Text>
          <Text
            style={styles.text2}
            onLongPress={() => {
              Clipboard.setString(modalKey);
              showMessage({
                message: 'Anahtar kopyalandı. Lütfen sürücüye teslim ediniz.',
                type: 'info',
                duration: 3000,
              });
              setModalKey('');
            }}>
            {modalKey}
          </Text>
        </View>
      </Modal>
    </View>
  );
};

export default DriverInputModal;
