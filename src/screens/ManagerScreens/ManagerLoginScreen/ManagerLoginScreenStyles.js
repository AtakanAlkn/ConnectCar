import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 80,
    backgroundColor: '#253343',
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  hint: {
    color: '#00B86B',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 8,
  },
  bottomContainer: {
    marginTop: 50,
  },
  support: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#00B86B',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
  },
});
