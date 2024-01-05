import {StyleSheet} from 'react-native';
import colors from '../../../assets/Colors/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  brand: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  plate: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  license: {
    fontSize: 25,
    borderWidth: 2,
    borderRadius: 5,
    padding: 8,
    textAlign: 'center',
    borderColor: 'black',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  start: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 20,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startBox: {
    flex: 1,
    marginTop: 20,
  },
  sensor: {
    flex: 1,
    alignItems: 'center',
  },
  innerSensor: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
  },
  km: {
    fontWeight: 'bold',
    color: colors.secondary,
  },
  infoBox: {
    flex: 1,
    marginHorizontal: 30,
    flexDirection: 'row',

    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
