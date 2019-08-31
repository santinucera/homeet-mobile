import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import CustomButton from '@components/CustomButton';
import closeIcon from '@assets/closeSession.jpg';
import { actionCreators as authActions } from '@redux/auth/actions';
import Routes from '@constants/routes';
import { compose } from 'recompose';

import styles from './styles';

class AddButton extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(authActions.logout());
  };

  render() {
    return <CustomButton icon={closeIcon} onPress={this.handleLogout} style={styles.icon} />;
  }
}
const enhancer = compose(
  withNavigation,
  connect()
);

export default enhancer(AddButton);
