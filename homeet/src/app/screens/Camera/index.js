import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators as cameraActions } from '@redux/camera/actions';

import Camera from './layout';

const TAKE_PHOTO_OPTIONS = { quality: 0.5, base64: true };
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
    debugger;
    if (this.camera) {
      debugger;
      const data = await this.camera.takePictureAsync(TAKE_PHOTO_OPTIONS);
      debugger;
      onSavePhoto({ photo: data.base64, enabled: true });
    }
  };

  refCam = cam => {
    this.camera = cam;
  };

  render() {
    const { enabled } = this.state;
    debugger;
    return <Camera enabled={enabled} onTakePicture={this.takePicture} refCam={this.refCam} />;
  }
}

const mapDispatchToProps = dispatch => ({
  onSavePhoto: photo => dispatch(cameraActions.onSavePhoto(photo))
});

export default connect(
  null,
  mapDispatchToProps
)(CameraContainer);
