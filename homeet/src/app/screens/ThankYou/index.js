import React, { Component } from 'react';
import { View, Image } from 'react-native';
import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import smile from '@assets/smile.png';
import { compose } from 'recompose';
import { connect } from 'react-redux'
import { withNavigation, NavigationActions, StackActions } from 'react-navigation';
import { white } from '@constants/colors';

class ThankYou extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#DCC7AF' }}>
        <Image source={smile} style={{ height: 400, width: 400 }} />
        <CustomText bold center>¡Gracias por compartir esta información con nosotros!</CustomText>
        <CustomButton style={{ width: '90%', marginTop: 20 }} textStylee={{ color: white }} onPress={this.props.navigate} primaryBtn title={'Volver al inicio'} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    navigate: () => dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Home' })]
      }))
  });
  
  const enhancer = compose(
    withNavigation,
    connect(null,mapDispatchToProps)
    );
  
  export default enhancer(ThankYou);
