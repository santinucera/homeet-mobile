import { StyleSheet } from 'react-native';
import { red, gray, transparent, blueNavy } from '@constants/colors';
import { scale } from '@utils/scalingUtils';

const ICON_SIZE = scale(18);

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 42,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  inputStyle: {
    padding: 0,
    marginHorizontal: 0,
    marginBottom: 0
  },
  singleInput: {
    flex: 1
  },
  multilineInput: {
    paddingTop: 10,
    paddingLeft: 0
  },
  labelIcon: {
    height: ICON_SIZE,
    marginRight: 10,
    width: ICON_SIZE
  },
  labelIconError: {
    tintColor: red
  },
  labelIconActive: {
    tintColor: blueNavy
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: gray
  },
  underlineError: {
    borderBottomColor: red
  },
  underlineActive: {
    borderBottomColor: blueNavy
  },
  title: {
    marginTop: 5,
    backgroundColor: transparent
  },
  errorMessage: {
    alignSelf: 'flex-start',
    marginTop: 4,
    marginBottom: 10,
    color: blueNavy
  }
});
