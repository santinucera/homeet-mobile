import React, { Component } from 'react';
import { connect } from 'react-redux';
import CameraRoll from '@react-native-community/cameraroll';
import { actionCreators as CameraActions } from '@redux/camera/actions';

import Camera from './layout';

const TAKE_PHOTO_OPTIONS = { quality: 0.5, base64: true, fixOrientation: true, pauseAfterCapture: true };
class CameraContainer extends Component {
  state = {
    enabled: true
  };

  handleTakePicture = () => {
    const { enabled } = this.state;
    return enabled && this.setState({ enabled: false }, this.takePicture);
  };

  takePicture = async () => {
    const { onSavePhoto } = this.props;
    if (this.camera) {
      const { uri } = await this.camera.takePictureAsync(TAKE_PHOTO_OPTIONS);
      CameraRoll.saveToCameraRoll(uri);
      debugger;
      onSavePhoto(uri);
      this.setState({ enabled: true });
    }
  };

  refCam = cam => {
    this.camera = cam;
  };

  render() {
    const { enabled } = this.state;
    return <Camera enabled={enabled} onTakePicture={this.handleTakePicture} refCam={this.refCam} />;
  }
}

const mapDispatchToProps = dispatch => ({
  onSavePhoto: photo => dispatch(CameraActions.onSavePhoto(photo))
});

export default connect(
  null,
  mapDispatchToProps
)(CameraContainer);
