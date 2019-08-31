import api from '@config/api';
import CameraRoll from '@react-native-community/cameraroll';

const setPhotoName = () => {
  api.setHeaders({ object_key: 'guido.jpg' });
  return api.get('https://1r08mbep4f.execute-api.us-east-1.amazonaws.com/dev/presigned-url');
};

export const sendPhoto = async photo => {
  const response = await setPhotoName();
  debugger;
  CameraRoll.getPhotos({
    first: 10
  })
    .then(r => {
      console.log(r);
      debugger;
      return r.edges.find(p => p.node.image.uri === photo);
    })
    .then(result => api.put(response.data.url, result))
    .catch(err => {
      debugger;
    });
};
