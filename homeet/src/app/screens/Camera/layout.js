import React, { Component } from 'react';
import { RNCamera, FaceDetector } from 'react-native-camera';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import CustomText from '@components/CustomText';

import styles from './styles';

class Camera extends Component {
  
  camRef = React.createRef();
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          style={styles.preview}
          ref={this.camRef}
          type={RNCamera.Constants.Type.back}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
      </View>
    );
  }
}

Camera.propTypes = {
  onLogout: PropTypes.func.isRequired
};

export default Camera;
