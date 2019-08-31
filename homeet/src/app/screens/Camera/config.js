import { RNCamera } from 'react-native-camera';

export const TAKE_PHOTO_OPTIONS = {
  base64: true,
  quality: 0.5,
  pauseAfterCapture: true,
  fixOrientation: true,
  forceUpOrientation: true,
  orientation: RNCamera.Constants.Orientation.portrait,
  width: 1200
};
