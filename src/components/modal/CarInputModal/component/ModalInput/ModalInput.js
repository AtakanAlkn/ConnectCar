import React from 'react';
import {TextInput} from 'react-native';
import styles from './ModalInputStyles';

const ModalInput = ({placeholder, onChangeText}) => {
  return (
    <TextInput
      style={styles.container}
      placeholderTextColor="black"
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
};

export default ModalInput;
