import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './DriverManagementScreenStyles';
import FloatButton from '../../../components/FloatButton';
import DriverInputModal from '../../../components/modal/DriverInputModal';
import database from '@react-native-firebase/database';
import {showMessage} from 'react-native-flash-message';
import parseData from '../../../utils/parseData';
import DriverCard from './DriverCard/DriverCard';

const DriverManagementScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [driverList, setDriverList] = useState('');

  const newReference = database().ref('/drivers');
  useEffect(() => {
    newReference.on('value', snapshot => {
      const data = snapshot.val();
      if (!data) {
        return;
      }
      const parsedDriverData = parseData(data);
      setDriverList(parsedDriverData);
    });
  }, []);

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };

  const handleSend = data => {
    toggleVisible();
    newReference
      .push(data)
      .then(response => {
        showMessage({
          message: 'Sürücü ekleme başarılı',
          type: 'success',
        });
      })
      .catch(error => {
        showMessage({
          message: 'Sürücü eklenemedi',
          description: error.name,
          type: 'danger',
        });
      });
  };

  const renderDriver = ({item}) => {
    return <DriverCard data={item} onPress={() => null} />;
  };
  return (
    <View style={styles.container}>
      <FlatList data={driverList} renderItem={renderDriver} />
      <DriverInputModal
        isVisible={isVisible}
        onClose={toggleVisible}
        onSend={handleSend}
      />
      <FloatButton icon="plus" onPress={toggleVisible} />
    </View>
  );
};

export default DriverManagementScreen;
