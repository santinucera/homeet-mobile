import React from 'react';
import i18next from 'i18next';
import { HeaderBackButton } from 'react-navigation';
import Routes from '@constants/routes';
import { blue, white, green, blueNavy } from '@constants/colors';
import CloseSessionButton from '@app/components/CloseSessionButton';

// Default nav options for all screens
const defaultNavOptions = ({ navigation }) => ({
  // Change screen title from i18n traslates files
  headerTitle: i18next.t(`app:${navigation.state.routeName}`),

  // TODO: The following options are examples. Change them to your need
  headerStyle: {
    backgroundColor: blue
  },
  headerBackTitleStyle: {
    color: white
  },
  headerTitleStyle: {
    color: white
    // TODO: If you want to change the header font, apply these options
    // Replace the font with the need
    // See: https://medium.com/react-native-training/react-native-custom-fonts-ccc9aacf9e5e
    // fontWeight: 'normal',
    // fontFamily: 'Lato-Bold'
  },
  headerTintColor: white
});

export const screensNavOptions = {
  [Routes.Home]: {
    headerRight: <CloseSessionButton />,
    headerStyle: {
      backgroundColor: blueNavy
    }
  },
  [Routes.Camera]: ({ navigation }) => ({
    headerTitle: 'Camara',
    headerLeft: HeaderBackButton,
    headerTintColor: green,
    headerBackTitle: 'Volver'
  }),
  [Routes.InitialLoading]: {
    header: null,
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0
    }
  },
  [Routes.Login]: {
    header: null
  },
  [Routes.UploadPerson]: {
    header: null
  },
  [Routes.ThankYou]: {
    header: null
  }
};

export const stackNavConfig = {
  defaultNavigationOptions: defaultNavOptions
  // TODO: Change other options for the router to your need:
  // See: https://reactnavigation.org/docs/stack-navigator.html#stacknavigatorconfig
};

export const tabNavConfig = {
  // TODO: The following options are examples. Change them to your need
  // See: https://reactnavigation.org/docs/tab-navigator.html#tabnavigatorconfig
  tabBarPosition: 'bottom'
};
