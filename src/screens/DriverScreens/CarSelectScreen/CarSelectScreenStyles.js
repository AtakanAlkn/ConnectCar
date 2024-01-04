import {StyleSheet} from 'react-native';
import colors from '../../../assets/Colors/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingTop: 30,
  },
  header: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.secondary,
    fontSize: 24,
    marginBottom: 20,
  },
});
