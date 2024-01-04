import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './ButtonStyles';

const Button = ({title, onPress, theme = 'primary', disabled = false}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles[theme].button}
        onPress={onPress}
        disabled={disabled}>
        {disabled ? (
          <ActivityIndicator color={'white'} />
        ) : (
          <Text style={styles[theme].buttonText}>{title}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};
export default Button;
