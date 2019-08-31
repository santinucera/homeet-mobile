import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';

import styles from './styles';

function CameraButton({ onTakePhoto, enabled }) {
  return <TouchableOpacity onPress={onTakePhoto} style={styles.blueCircle} activeOpacity={enabled ? 1 : 0} />;
}

CameraButton.propTypes = {
  onTakePhoto: PropTypes.func.isRequired,
  enabled: PropTypes.bool.isRequired
};

export default CameraButton;
