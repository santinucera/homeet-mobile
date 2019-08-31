import { StyleSheet } from 'react-native';
import { black } from '@constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  button: {
    marginHorizontal: 20
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: black,
    height: 120,
    width: '100%'
  }
});

export default styles;
