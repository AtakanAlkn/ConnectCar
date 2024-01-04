import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './InputStyles';

const Input = ({onChangeText, secureTextEntry = false}) => {
  const [text, setText] = useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={newText => {
          setText(newText);
          onChangeText(newText);
        }}
        value={text}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;
