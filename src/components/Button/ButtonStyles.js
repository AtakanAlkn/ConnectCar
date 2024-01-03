import {StyleSheet} from 'react-native';

const base_style = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default {
  primary: StyleSheet.create({
    ...base_style,
    button: {
      ...base_style.button,
      backgroundColor: '#00B86B',
    },
    buttonText: {
      ...base_style.buttonText,
      color: 'white',
    },
  }),
  secondary: StyleSheet.create({
    button: {
      ...base_style.button,
      backgroundColor: 'white',
    },
    buttonText: {
      ...base_style.buttonText,
      color: '#253343',
    },
  }),
  outline: StyleSheet.create({
    button: {
      ...base_style.button,
      backgroundColor: '#253343',
      borderColor: '#00B86B',
    },
    buttonText: {
      ...base_style.buttonText,
      color: '#00B86B',
    },
  }),
};
