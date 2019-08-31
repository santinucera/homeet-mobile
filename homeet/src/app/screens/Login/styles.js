import { StyleSheet } from 'react-native';
import { transparent, gray, white, blueNavy } from '@constants/colors';
import { scale, verticalScale } from '@utils/scalingUtils';

export default StyleSheet.create({
  separatorText: {
    marginHorizontal: scale(10)
  },
  container: {
    paddingHorizontal: scale(30),
    paddingVertical: scale(50),
    flex: 1,
    height: '100%',
    justifyContent: 'space-around',
    backgroundColor: '#DCC7AF'
  },
  hiddenLogoView: {
    paddingVertical: scale(100),
    justifyContent: 'flex-start'
  },
  forgotPasswordBtn: {
    alignSelf: 'flex-end'
  },
  formElement: {
    backgroundColor: transparent,
    height: verticalScale(42),
    width: '100%',
    color: blueNavy
  },
  logo: {
    alignSelf: 'center',
    marginTop: verticalScale(40),
    marginBottom: verticalScale(25),
    height: scale(300),
    width: scale(450)
  },
  logInOptionBtn: {
    padding: scale(10),
    borderWidth: 1.5,
    borderRadius: 5,
    width: '48%',
    marginHorizontal: '2%'
  },
  loginBtn: {
    marginVertical: verticalScale(24)
  },
  icon: {
    marginRight: 10
  },
  registerAccount: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  separatorContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  signUpTxt: {
    alignSelf: 'center',
    marginHorizontal: scale(10),
    color: gray
  },
  blackText: {
    color: '#2A5365'
  },
  whiteText: {
    color: white
  },
  hiddenLogo: {
    width: 0,
    height: 0,
    marginBottom: 0
  }
});
