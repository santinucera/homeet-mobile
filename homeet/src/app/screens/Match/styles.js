import { StyleSheet } from 'react-native';
import { green, blue, white } from '@constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DCC7AF',
    paddingHorizontal: 40
  },
  whiteText: {
    color: white
  },
  signUpBtn: {
    marginTop: 20,
    borderRadius: 5,
    width: '100%'
  }
});
