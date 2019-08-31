import { StackActions, NavigationActions } from 'react-navigation';
import { createTypes, completeTypes, withPostSuccess, withPostFailure } from 'redux-recompose';
import * as CameraService from '@services/CameraService';
import Routes from '@constants/routes';

export const actions = createTypes(completeTypes(['SAVE_PHOTO']), '@@CAMERA');

export const actionCreators = {
  onSavePhoto: photo => ({
    type: actions.SAVE_PHOTO,
    service: CameraService.sendPhoto,
    payload: photo,
    injections: [
      withPostSuccess((dispatch, response) => {
        debugger;
        dispatch(
          StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: Routes.Home })]
          })
        );
      }),
      withPostFailure((dispatch, response) => {
        debugger;
      })
    ]
  })
};
