import React, { Component } from 'react';
import { RNCamera } from 'react-native-camera';
import { View, ActivityIndicator } from 'react-native';
import { black } from '@constants/colors';

import CameraButton from './CameraButton';
import styles from './styles';

class Camera extends Component {
  render() {
    const { onTakePicture, enabled, refCam, loading } = this.props;
    return loading ? (
      <ActivityIndicator size="large" color={black} />
    ) : (
      <View style={styles.container}>
        <RNCamera
          style={styles.preview}
          ref={refCam}
          type={RNCamera.Constants.Type.back}
          playSoundOnCapture={true}
          captureAudio={false}
          androidCameraPermissionOptions={{
            title: 'Permisos para usar la camara',
            message: 'Necesitamos tu permiso para usar la camara',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancelar'
          }}
        >
          <View style={styles.footer}>
            <CameraButton onTakePhoto={onTakePicture} enabled={enabled} />
          </View>
        </RNCamera>
      </View>
    );
  }
}

export default Camera;
