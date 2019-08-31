import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import CustomButton from '@components/CustomButton';

import styles from './styles';

export default function Home({ onLogout, onCamera }) {
  return (
    <View style={styles.container}>
      <CustomButton onPress={onLogout} green title="Cerrar sesion!" style={styles.logout} />
      <CustomButton onPress={onCamera} blue title="Camara!" style={styles.camera} />
    </View>
  );
}

Home.propTypes = {
  onLogout: PropTypes.func.isRequired,
  onCamera: PropTypes.func.isRequired
};
