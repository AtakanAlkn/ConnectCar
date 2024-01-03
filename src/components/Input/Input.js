import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './InputStyles';

const Input = () => {
  const [text, setText] = useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        secureTextEntry={true}
      />
    </View>
  );
};

export default Input;
