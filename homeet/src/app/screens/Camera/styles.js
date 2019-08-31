import { StyleSheet } from 'react-native';

const MARGIN_HORIZONTAL_BUTTON = 20;

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
    marginHorizontal: MARGIN_HORIZONTAL_BUTTON
  },
  footer: {
    flex: 0.2,
    backgroundColor: '#ffffff',
    justifyContent: 'center'
  }
});

export default styles;
