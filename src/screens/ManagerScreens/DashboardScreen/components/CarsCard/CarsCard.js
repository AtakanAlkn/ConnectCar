import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './CarsCardStyles';

const CarsCard = ({data}) => {
  if (!data) {
    return null;
  }
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
    <View style={styles.container}>
      <View>
        <Image source={modelImage} style={styles.image} />
      </View>
      <View style={styles.rightContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>{data.license}</Text>
          {data.inUse ? (
            <Text style={{...styles.inUseText, color: 'red'}}>Kullanımda</Text>
          ) : (
            <Text style={styles.inUseText}>Boş</Text>
          )}
        </View>
        <View>
          <Text style={styles.text}>{data.brand + ' ' + data.model}</Text>
          <Text style={styles.text}>{data.year}</Text>
        </View>
      </View>
    </View>
  );
};

export default CarsCard;
