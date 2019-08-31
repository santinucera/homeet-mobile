import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { object, string, number } from 'yup';
import { connect } from 'react-redux';
import Routes from '@constants/routes';
import AuthActions from '@redux/auth/actions';

import { UPLOAD_PERSON_FIELDS } from './constants';
import UploadPerson from './layout';
import { compose } from 'recompose';
import { withNavigation, NavigationActions, StackActions } from 'react-navigation';

class UploadPersonContainer extends Component {
  state = {
    currentStep: 0,
    loading: false
  };

  initialValues = {
    [UPLOAD_PERSON_FIELDS.AGE]: '',
    [UPLOAD_PERSON_FIELDS.HEIGHT]: '',
    [UPLOAD_PERSON_FIELDS.ID]: '',
    [UPLOAD_PERSON_FIELDS.LAST_LOCATION]: '',
    [UPLOAD_PERSON_FIELDS.NAME]: ''
  };

  formValidationSchema = {
    0: object().shape({
      [UPLOAD_PERSON_FIELDS.AGE]: string().required('Campo requerido'),
      [UPLOAD_PERSON_FIELDS.HEIGHT]: string().required('Campo requerido'),
      [UPLOAD_PERSON_FIELDS.ID]: string().required('Campo requerido'),
      [UPLOAD_PERSON_FIELDS.LAST_LOCATION]: string().required('Campo requerido'),
      [UPLOAD_PERSON_FIELDS.NAME]: string().required('Campo requerido')
    }),
    1: object().shape({})
  };

  static getDerivedStateFromProps(props) {
    if (props.error) {
      return { currentStep: 0 };
    }
    return null;
  }

  handleNext = () => {
    debugger;
    this.setState(prevState => ({ currentStep: prevState.currentStep + 1 }));
  };

  handleUploadPerson = values => {
    // const { uploadPerson } = this.props;
    this.setState({ loading: true })
    setTimeout(() => this.props.navigate()
    , 2000)
    // uploadPerson(values);
  };

  render() {
    const { currentStep, loading } = this.state;
    return (
      <UploadPerson
        currentStep={currentStep}
        onNext={this.handleNext}
        validationSchema={this.formValidationSchema}
        initialValues={this.initialValues}
        onUpload={this.handleUploadPerson}
        loading={loading}
      />
    );
  }
}

const mapStateToProps = state => ({
  loading: state.auth.signUpUserLoading,
  error: state.auth.signUpUserError
});

UploadPersonContainer.propTypes = {};

const mapDispatchToProps = dispatch => ({
  uploadPerson: values => dispatch(AuthActions.signUp(values)),
  navigate: () => dispatch(
    StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'ThankYou' })]
    }))
});

const enhancer = compose(
  withNavigation,
  connect(mapStateToProps,mapDispatchToProps)
  );

export default enhancer(UploadPersonContainer);
