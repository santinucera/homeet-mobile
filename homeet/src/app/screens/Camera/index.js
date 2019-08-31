import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators as authActions } from '@redux/auth/actions';

import Camera from './layout';

class CameraContainer extends Component {
  state = {
    photo: null,
    enabled: true
  };

  handleTakePicture = () => {
    const { enabled } = this.state;
    return enabled && this.setState({ enabled: false }, this.takePicture);
  };

  takePicture = async () => {
    if (this.camera) {
      const data = await this.camera.takePictureAsync(TAKE_PHOTO_OPTIONS);
      this.setState(prevState => ({
        photo: data.base64,
        enabled: true
      }));
    }
  };

  render() {
    const { enabled } = this.state;
    return <Camera onTakePicture={this.handleTakePicture} enabled={enabled} />;
  }
}

export default connect()(CameraContainer);
