import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators as authActions } from '@redux/auth/actions';

import Camera from './layout';

class CameraContainer extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(authActions.logout());
  };

  render() {
    return <Camera onLogout={this.handleLogout} />;
  }
}

export default connect()(CameraContainer);
