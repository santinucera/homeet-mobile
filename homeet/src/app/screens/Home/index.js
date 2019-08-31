import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { actionCreators as authActions } from '@redux/auth/actions';
import Routes from '@constants/routes';

import Home from './layout';

class HomeContainer extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(authActions.logout());
  };

  handleCamera = () => {
    const { dispatch } = this.props;
    dispatch(NavigationActions.navigate({ routeName: Routes.Camera }));
  }

  render() {
    return <Home onCamera={this.handleCamera} />;
  }
}

export default connect()(HomeContainer);
