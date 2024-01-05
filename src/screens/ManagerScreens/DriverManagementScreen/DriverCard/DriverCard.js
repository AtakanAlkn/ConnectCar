import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './DriverCardStyles';
import Icon from 'react-native-vector-icons/Fontisto';
import colors from '../../../../assets/Colors/colors';
import useTimeConvert from '../../../../utils/useTimeConvert';

const DriverCard = ({data, onPress}) => {
  const timeValue = useTimeConvert(data.time);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconBox}>
        <Icon name={data.gender} size={50} color={colors.secondary} />
      </View>
      <View>
        <Text style={styles.text}>{data.name}</Text>
        <Text style={styles.text}>
          {data.wrong
            ? data.wrong + ' adet hatalı sürüş'
            : data.time
            ? 'Kusursuz sürüş'
            : null}
        </Text>
        <Text style={styles.text}>
          {data.time
            ? timeValue + ' saatlik sürüş'
            : 'Sürüş deneyimi bulunmuyor'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default DriverCard;
