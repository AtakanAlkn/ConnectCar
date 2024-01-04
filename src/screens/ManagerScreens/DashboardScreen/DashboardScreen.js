import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './DashboardScreenStyles';
import database from '@react-native-firebase/database';
import Button from '../../../components/Button';
import parseCarData from '../../../utils/parseCarData';
import CarsCard from './components/CarsCard';

const DashboardScreen = () => {
  const [carList, setCarList] = useState('');
  const newReference = database().ref('/cars');
  const onDeneme = () => {
    newReference
      .push({
        brand: 'Fiat',
        model: 'Ducato',
        year: 2020,
        style: 'Van',
        inUse: true,
        driver: null,
        license: '25E87',
      })
      .then(() => console.log('Data updated.'));
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

  const renderCar = ({item}) => {
    return <CarsCard data={item} />;
  };
  return (
    <View style={styles.container}>
      <FlatList data={carList} renderItem={renderCar} />
      <Button title="Go" onPress={onDeneme} />
    </View>
  );
};

export default DashboardScreen;
