import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators as cameraActions } from '@redux/camera/actions';

import Camera from './layout';

const TAKE_PHOTO_OPTIONS = { quality: 0.5, base64: true };
class CameraContainer extends Component {
  handleTakePicture = () => {
    const { enabled } = this.state;
    return enabled && this.setState({ enabled: false }, this.takePicture);
  };

  takePicture = async () => {
    const { onSavePhoto } = this.props;
    if (this.camera) {
      const data = await this.camera.takePictureAsync(TAKE_PHOTO_OPTIONS);
      onSavePhoto({ photo: data.base64, enabled: true });
    }
  };

  render() {
    const { enabled } = this.state;
    return <Camera onTakePicture={this.handleTakePicture} enabled={enabled} />;
  }
}

const mapDispatchToProps = dispatch => ({
  onSavePhoto: photo => dispatch(cameraActions.onSavePhoto(photo))
});

export default connect(
  null,
  mapDispatchToProps
)(CameraContainer);
