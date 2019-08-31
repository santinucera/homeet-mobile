import { StyleSheet } from 'react-native';
import { green, blue } from '@constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logout: {
    backgroundColor: green,
    padding: 10,
    borderRadius: 3,
    margin: 30
  },
  camera: {
    backgroundColor: blue,
    padding: 10,
    borderRadius: 3,
    margin: 30
  }
});
