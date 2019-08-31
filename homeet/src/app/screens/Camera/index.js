import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationActions, withNavigation } from 'react-navigation';
import { compose } from 'recompose';
import Routes from '@constants/routes';

import Camera from './layout';

const TAKE_PHOTO_OPTIONS = { quality: 0.5, base64: true, fixOrientation: true, pauseAfterCapture: true };
class CameraContainer extends Component {
  state = {
    enabled: true,
    loading: true
  };

  handleTakePicture = () => {
    const { enabled } = this.state;
    return enabled && this.setState({ enabled: false }, this.takePicture);
  };

  takePicture = async () => {
    const { navigate } = this.props;
    this.setState({ loading: true });
    setTimeout(() => {}, 4000);
    this.setState({ loading: false }, () => navigate());
    /* const { onSavePhoto } = this.props;
    if (this.camera) {
      const { uri } = await this.camera.takePictureAsync(TAKE_PHOTO_OPTIONS);
      CameraRoll.saveToCameraRoll(uri);
      debugger;
      onSavePhoto(uri);
      this.setState({ enabled: true });
    } */
  };

  refCam = cam => {
    this.camera = cam;
  };

  render() {
    const { enabled, loading } = this.state;
    return <Camera enabled={enabled} onTakePicture={this.handleTakePicture} refCam={this.refCam} />;
  }
}

const mapDispatchToProps = dispatch => ({
  navigate: () => dispatch(NavigationActions.navigate({ routeName: Routes.Match }))
});

const enhancer = compose(
  withNavigation,
  connect(
    null,
    mapDispatchToProps
  )
);

export default enhancer(CameraContainer);
