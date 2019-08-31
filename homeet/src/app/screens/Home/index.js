import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { actionCreators as authActions } from '@redux/auth/actions';
import Routes from '@constants/routes';

import Home from './layout';

class HomeContainer extends Component {
  handleUploadPerson = () => {
    const { dispatch } = this.props;
    dispatch(NavigationActions.navigate({ routeName: Routes.UploadPerson }));
  };

  handleCamera = () => {
    const { dispatch } = this.props;
    dispatch(NavigationActions.navigate({ routeName: Routes.Camera }));
  };

  render() {
    return <Home onCamera={this.handleCamera} onUploadPerson={this.handleUploadPerson}/>;
  }
}

export default connect()(HomeContainer);
