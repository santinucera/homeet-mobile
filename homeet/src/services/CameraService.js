import api from '@config/api';
import CameraRoll from '@react-native-community/cameraroll';

const setPhotoName = name => {
  api.setHeader('object_key', name);
  return api.get('https://1r08mbep4f.execute-api.us-east-1.amazonaws.com/dev/presigned-url');
};

export const sendPhoto = async photo => {
  const response = await setPhotoName('guido.jpg');
  CameraRoll.getPhotos({
    first: 10
  })
    .then(r => r.edges.find(p => p.node.image.uri === photo))
    .then(result => api.put(response.data.url, result))
    .catch(err => {
      debugger;
    });
};
