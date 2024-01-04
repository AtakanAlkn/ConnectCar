import {StyleSheet} from 'react-native';
import colors from '../../../../../assets/Colors/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginHorizontal: 10,
    paddingRight: 10,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  rightContainer: {
    flex: 1,
    marginLeft: 5,
    justifyContent: 'space-between',
  },
  inUseText: {
    fontWeight: 'bold',
    textAlign: 'right',
    color: colors.secondary,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    marginHorizontal: 2,
  },
  textContainer: {
    flexDirection: 'row',
    flex: 1,
  },
});
