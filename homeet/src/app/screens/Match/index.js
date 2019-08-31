import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withNavigation, NavigationActions } from 'react-navigation';
import CustomText from '@components/CustomText';
import Routes from '@constants/routes';
import CustomButton from '@components/CustomButton';

import styles from './styles';

class Match extends Component {
  handlePress = () => {
    const { navigate } = this.props;
    navigate();
  };

  render() {
    return (
      <View style={styles.container}>
        <CustomText>
          {
            'Encontramos un resultado \nTe puedes contactar con el familiar de Rodrigo\nTelefono: 11-2222-3333 \nEmail: santi.nucera@wolox.com'
          }
        </CustomText>
        <CustomButton
          primaryBtn
          onPress={this.handlePress}
          title="Volver"
          textStyle={styles.whiteText}
          style={styles.signUpBtn}
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  navigate: () => dispatch(NavigationActions.navigate({ routeName: Routes.Home }))
});

const enhancer = compose(
  withNavigation,
  connect(
    null,
    mapDispatchToProps
  )
);

export default enhancer(Match);
