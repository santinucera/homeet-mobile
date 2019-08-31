import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import CustomButton from '@components/CustomButton';
import find from '@assets/find.png';
import upload from '@assets/upload.png';
import SeparatorWithText from '@components/SeparatorWithText';
import { blueNavy } from '@constants/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

export default function Home({ onCamera, onUploadPerson }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onCamera}>
        <Image source={find} style={styles.image} />
        <CustomButton onPress={onCamera} black title="Buscar" />
      </TouchableOpacity>
      <SeparatorWithText separatorStyle={{ backgroundColor: blueNavy, marginBottom: 40, marginTop: 20 }} />
      <TouchableOpacity onPress={onUploadPerson}>
        <Image source={upload} style={styles.image} />
        <CustomButton onPress={onUploadPerson} black title="Subir" />
      </TouchableOpacity>
    </View>
  );
}

Home.propTypes = {
  onCamera: PropTypes.func.isRequired,
  onUploadPerson: PropTypes.func.isRequired
};
