import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import CustomButton from '@components/CustomButton';
import find from '@assets/find.png';
import upload from '@assets/upload.png';
import SeparatorWithText from '@components/SeparatorWithText';
import { blueNavy } from '@constants/colors';

import styles from './styles';

export default function Home({ onLogout, onCamera }) {
  return (
    <View style={styles.container}>
      <Image source={find} style={styles.image}/>
      <CustomButton onPress={onLogout} black title="Buscar" />
      <SeparatorWithText separatorStyle={{ backgroundColor: blueNavy, marginBottom: 40, marginTop: 20  }}/>
      <Image source={upload} style={styles.image}/>
      <CustomButton onPress={onCamera} black title="Subir" />
    </View>
  );
}

Home.propTypes = {
  onLogout: PropTypes.func.isRequired,
  onCamera: PropTypes.func.isRequired
};
