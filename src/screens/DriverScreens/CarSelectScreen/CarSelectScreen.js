import React, {useState, useEffect} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import styles from './CarSelectScreenStyles';
import database from '@react-native-firebase/database';
import parseCarData from '../../../utils/parseCarData';
import CarSelectCard from './components/CarSelectCard/CarSelectCard';

const CarSelectScreen = ({navigation}) => {
  const [carList, setCarList] = useState('');

  const goDriveScreen = item => {
    navigation.navigate('DriveScreen', {item});
  };
  const renderCar = ({item}) => {
    return <CarSelectCard data={item} onPress={() => goDriveScreen(item)} />;
  };

  useEffect(() => {
    database()
      .ref('/cars')
      .on('value', snapshot => {
        const data = snapshot.val();
        const parsedCarData = parseCarData(data);
        setCarList(parsedCarData);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lütfen aracınızı seçiniz</Text>
      <FlatList
        data={carList}
        renderItem={renderCar}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CarSelectScreen;
