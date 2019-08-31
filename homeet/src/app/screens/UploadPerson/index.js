import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { object, string, number } from 'yup';
import { connect } from 'react-redux';
import Routes from '@constants/routes';
import AuthActions from '@redux/auth/actions';

import { UPLOAD_PERSON_FIELDS } from './constants';
import SignUp from './layout';

class UploadPersonContainer extends Component {
  state = {
    currentStep: 0
  };

  initialValues = {
    [UPLOAD_PERSON_FIELDS.AGE]: '',
    [UPLOAD_PERSON_FIELDS.HEIGHT]: '',
    [UPLOAD_PERSON_FIELDS.ID]: '',
    [UPLOAD_PERSON_FIELDS.LAST_LOCATION]: '',
    [UPLOAD_PERSON_FIELDS.LAST_NAME]: '',
    [UPLOAD_PERSON_FIELDS.NAME]: ''
  };

  formValidationSchema = {
    0: object().shape({
      [UPLOAD_PERSON_FIELDS.AGE]: string().required('Campo requerido'),
      [UPLOAD_PERSON_FIELDS.HEIGHT]: string().required('Campo requerido'),
      [UPLOAD_PERSON_FIELDS.ID]: string().required('Campo requerido'),
      [UPLOAD_PERSON_FIELDS.LAST_LOCATION]: string().required('Campo requerido'),
      [UPLOAD_PERSON_FIELDS.LAST_NAME]: string().required('Campo requerido'),
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
    const { error, cleanSignUpError } = this.props;
    if (error) cleanSignUpError();
    this.setState(prevState => ({ currentStep: prevState.currentStep + 1 }));
  };

  handleBack = () => this.setState(prevState => ({ currentStep: prevState.currentStep - 1 }));

  handleSignUp = values => {
    const { signUp } = this.props;
    signUp(values);
  };

  render() {
    const { currentStep } = this.state;
    const { loading } = this.props;
    return (
      <SignUp
        currentStep={currentStep}
        onNext={this.handleNext}
        onBack={this.handleBack}
        onGoToLogin={this.handleGotoLogIn}
        validationSchema={this.formValidationSchema}
        initialValues={this.initialValues}
        onSignUp={this.handleSignUp}
        loading={loading}
      />
    );
  }
}

const mapStateToProps = state => ({
  loading: state.auth.signUpUserLoading,
  error: state.auth.signUpUserError
});

UploadPersonContainer.propTypes = {
  error: PropTypes.shape({
    internalCode: PropTypes.string.isRequired
  }),
  signUp: PropTypes.func.isRequired,
  cleanSignUpError: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapDispatchToProps = dispatch => ({
  signUp: values => dispatch(AuthActions.signUp(values)),
  cleanSignUpError: () => dispatch(AuthActions.cleanSignUpError())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadPersonContainer);
