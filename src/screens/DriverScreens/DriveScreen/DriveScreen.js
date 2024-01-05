import React from 'react';
import {View, Text, Image, TouchableOpacity, Button} from 'react-native';
import styles from './DriveScreenStyles';
import Icon from 'react-native-vector-icons/Entypo';

const DriveScreen = ({route}) => {
  const modelImageMap = {
    Sedan: require('../../../assets/Images/sedan.png'),
    Hatchback: require('../../../assets/Images/hatchback.png'),
    SUV: require('../../../assets/Images/suv.png'),
    Truck: require('../../../assets/Images/truck.png'),
    Van: require('../../../assets/Images/van.png'),
  };
  const {item} = route.params;
  const {driverInfo} = route.params;
  const modelImage =
    modelImageMap[item.style] || require('../../../assets/Images/sedan.png');

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={modelImage} style={styles.image} />
      </View>
      <Text style={styles.brand}> {item.brand + ' ' + item.model}</Text>
      <View style={styles.plate}>
        <Text style={styles.license}>{item.license}</Text>
        <TouchableOpacity style={styles.start} onPress={() => null}>
          <Icon name="key" size={30} color="white" />
        </TouchableOpacity>
        <Button title="Deneme" onPress={() => null} />
      </View>
    </View>
  );
};

export default DriveScreen;
