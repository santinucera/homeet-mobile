import { StyleSheet } from 'react-native';
import { green, transparent } from '@constants/colors';

const styles = StyleSheet.create({
  transparentCircle: {
    alignItems: 'center',
    borderRadius: 3,
    borderColor: green,
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: transparent,
    height: 5,
    width: 5
  },
  blueCircle: {
    backgroundColor: green,
    borderRadius: 30,
    height: 60,
    width: 60
  }
});

export default styles;
