import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import CustomButton from '@components/CustomButton';
import find from '@assets/find.png';
import upload from '@assets/upload.png';
import SeparatorWithText from '@components/SeparatorWithText';
import { blueNavy } from '@constants/colors';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Home({ onCamera }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onCamera}>
      <Image source={find} style={styles.image}/>
      <CustomButton onPress={onCamera} black title="Buscar" />
      </TouchableOpacity>
      <SeparatorWithText separatorStyle={{ backgroundColor: blueNavy, marginBottom: 40, marginTop: 20  }}/>
      <TouchableOpacity onPress={onCamera}>
      <Image source={upload} style={styles.image}/>
      <CustomButton onPress={onCamera} black title="Subir" />
      </TouchableOpacity>
    </View>
  );
}

Home.propTypes = {
  onCamera: PropTypes.func.isRequired
};
