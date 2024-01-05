import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './FloatButtonStyles';

const FloatButton = ({onPress, icon}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon name={icon} size={30} color="white" />
    </TouchableOpacity>
  );
};

export default FloatButton;
