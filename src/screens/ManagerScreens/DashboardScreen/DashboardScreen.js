import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import styles from './DashboardScreenStyles';
import database from '@react-native-firebase/database';
import parseData from '../../../utils/parseData';
import CarsCard from './components/CarsCard';
import CarInputModal from '../../../components/modal/CarInputModal';
import FloatButton from '../../../components/FloatButton';
import {showMessage} from 'react-native-flash-message';

const DashboardScreen = () => {
  const [carList, setCarList] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const newReference = database().ref('/cars');

  useEffect(() => {
    newReference.on('value', snapshot => {
      const data = snapshot.val();
      const parsedCarData = parseData(data);
      setCarList(parsedCarData);
    });
  }, []);

  const renderCar = ({item}) => {
    return <CarsCard data={item} />;
  };

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };

  const handleSend = data => {
    toggleVisible();
    newReference
      .push(data)
      .then(response => {
        showMessage({
          message: 'Araç ekleme başarılı',
          type: 'success',
        });
      })
      .catch(error => {
        showMessage({
          message: 'Araç eklenemedi',
          description: error.name,
          type: 'danger',
        });
      });
  };
  return (
    <View style={styles.container}>
      <FlatList data={carList} renderItem={renderCar} />
      <CarInputModal
        isVisible={isVisible}
        onClose={toggleVisible}
        onSend={handleSend}
      />
      <FloatButton icon="plus" onPress={toggleVisible} />
    </View>
  );
};

export default DashboardScreen;
