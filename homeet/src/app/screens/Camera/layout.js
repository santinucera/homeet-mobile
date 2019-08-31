import React, { Component } from 'react';
import { RNCamera } from 'react-native-camera';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import CustomText from '@components/CustomText';
import CameraButton from './CameraButton';
import styles from './styles';

class Camera extends Component {
  
  camRef = React.createRef();
  render() {
    const { onTakePicture, enabled } = this.props;
    return (
      <View style={styles.container}>
        <RNCamera
          style={styles.preview}
          ref={this.camRef}
          type={RNCamera.Constants.Type.back}
          playSoundOnCapture={false}
          captureAudio={false}
          androidCameraPermissionOptions={{
            title: 'Permisos para usar la camara',
            message: 'Necesitamos tu permiso para usar la camara',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancelar'
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permisos para grabar audio',
            message: 'Necesitamos tu permiso para grabar audio',
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
