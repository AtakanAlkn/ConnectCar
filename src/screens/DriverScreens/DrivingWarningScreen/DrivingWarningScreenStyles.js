import {StyleSheet} from 'react-native';
import colors from '../../../assets/Colors/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  dot: {
    backgroundColor: '#253343',
    borderColor: '#00B86B',
    borderWidth: 1,
    width: 13,
    height: 13,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7,
  },
  activeDot: {
    backgroundColor: '#00B86B',
    width: 13,
    height: 13,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7,
  },
});
