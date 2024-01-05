import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../assets/Colors/colors';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: deviceSize.height / 1.5,
    backgroundColor: 'white',
    justifyContent: 'space-around',
  },
  header: {
    color: colors.secondary,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
