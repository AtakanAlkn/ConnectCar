import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './ButtonStyles';

const Button = ({title, onPress, theme = 'primary'}) => {
  return (
    <View>
      <TouchableOpacity style={styles[theme].button} onPress={onPress}>
        <Text style={styles[theme].buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Button;
