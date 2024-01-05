import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './DriverCardStyles';
import Icon from 'react-native-vector-icons/Fontisto';
import colors from '../../../../assets/Colors/colors';

const DriverCard = ({data, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconBox}>
        <Icon name={data.gender} size={50} color={colors.secondary} />
      </View>
      <View>
        <Text style={styles.text}>{data.name}</Text>
        <Text style={styles.text}>
          {data.wrong
            ? data.time + 'adet hatalı sürüş'
            : data.time
            ? 'Kusursuz sürüş'
            : null}
        </Text>
        <Text style={styles.text}>
          {data.time
            ? data.time + 'saatlik sürüş'
            : 'Sürüş deneyimi bulunmuyor'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default DriverCard;
