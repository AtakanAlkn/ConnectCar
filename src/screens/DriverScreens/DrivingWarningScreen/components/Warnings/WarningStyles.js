import {StyleSheet} from 'react-native';
import colors from '../../../../../assets/Colors/colors';

export default StyleSheet.create({
  container: {
    flex: 3,
  },
  topContainer: {
    flex: 3,
    backgroundColor: colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    marginBottom: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
});
