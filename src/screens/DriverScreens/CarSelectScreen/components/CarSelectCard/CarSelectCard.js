import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './CarSelectCardStyles';

const CarSelectCard = ({data, onPress}) => {
  const modelImageMap = {
    Sedan: require('../../../../../assets/Images/sedan.png'),
    Hatchback: require('../../../../../assets/Images/hatchback.png'),
    SUV: require('../../../../../assets/Images/suv.png'),
    Truck: require('../../../../../assets/Images/truck.png'),
    Van: require('../../../../../assets/Images/van.png'),
  };

  const modelImage =
    modelImageMap[data.style] ||
    require('../../../../../assets/Images/sedan.png');

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={modelImage} style={styles.image} />
      <Text style={{fontWeight: 'bold', fontSize: 18}}>{data.license}</Text>
      <Text style={styles.text}>{data.brand + ' ' + data.model}</Text>
      <Text style={styles.text}>{data.year}</Text>
    </TouchableOpacity>
  );
};

export default CarSelectCard;
