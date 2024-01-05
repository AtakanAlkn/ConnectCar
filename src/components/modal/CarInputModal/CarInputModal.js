import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './CarInputModalStyles';
import Button from '../../Button';
import Modal from 'react-native-modal';
import DropDownPicker from 'react-native-dropdown-picker';
import ModalInput from './component/ModalInput/ModalInput';

//Fix (Formik)
const CarInputModal = ({isVisible, onSend, onClose}) => {
  const [brand, setBrand] = useState(null);
  const [model, setModel] = useState(null);
  const [year, setYear] = useState(null);
  const [license, setLicense] = useState(null);

  const handleSend = () => {
    if (!brand || !model || !style || !year || !license) {
      return;
    }
    const dataToSend = {
      inUse: false,
      driver: '',
      style: style,
      brand: brand,
      model: model,
      year: year,
      license: license,
    };

    onSend(dataToSend);
    setStyle(null);
    setBrand(null);
    setModel(null);
    setYear(null);
    setLicense(null);
  };

  const [open, setOpen] = useState(false);
  const [style, setStyle] = useState(null);
  const [items, setItems] = useState([
    {label: 'Sedan', value: 'Sedan'},
    {label: 'Truck', value: 'Truck'},
    {label: 'SUV', value: 'SUV'},
    {label: 'Van', value: 'Van'},
    {label: 'Hatchback', value: 'Hatchback'},
  ]);

  return (
    <Modal
      style={styles.modal}
      swipeDirection="down"
      isVisible={isVisible}
      onSwipeCancel={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <Text style={styles.header}>Araç Kayıt Ekranı</Text>
        <View>
          <DropDownPicker
            open={open}
            value={style}
            items={items}
            setOpen={setOpen}
            setValue={setStyle}
            setItems={setItems}
            placeholder="Araç tipi seçiniz"
            style={{marginVertical: 4}}
          />
          <ModalInput placeholder="Marka" onChangeText={setBrand} />
          <ModalInput placeholder="Model" onChangeText={setModel} />
          <ModalInput placeholder="Yıl" onChangeText={setYear} />
          <ModalInput placeholder="Plaka" onChangeText={setLicense} />
        </View>

        <Button title="Ekle" onPress={handleSend} />
      </View>
    </Modal>
  );
};

export default CarInputModal;
