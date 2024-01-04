import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#253343',
    justifyContent: 'space-around',
  },
  innerContainer: {
    flex: 1,
    marginVertical: 30,
    justifyContent: 'space-evenly',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 180,
    height: 180,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'white',
    marginTop: 30,
  },
  hint: {
    color: '#00B86B',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 8,
  },
});
