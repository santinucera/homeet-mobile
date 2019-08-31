import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { object, string, number } from 'yup';
import { connect } from 'react-redux';
import Routes from '@constants/routes';
import AuthActions from '@redux/auth/actions';

import { SIGN_UP_FIELDS } from './constants';
import SignUp from './layout';

class UploadPersonContainer extends Component {
  state = {
    currentStep: 0
  };

  initialValues = {
    [SIGN_UP_FIELDS.AGE]: '',
    [SIGN_UP_FIELDS.HEIGHT]: '',
    [SIGN_UP_FIELDS.ID]: '',
    [SIGN_UP_FIELDS.LAST_LOCATION]: '',
    [SIGN_UP_FIELDS.LAST_NAME]: '',
    [SIGN_UP_FIELDS.NAME]: ''
  };

  formValidationSchema = {
    0: object().shape({
      [SIGN_UP_FIELDS.AGE]: string().required('Campo requerido'),
      [SIGN_UP_FIELDS.HEIGHT]: string().required('Campo requerido'),
      [SIGN_UP_FIELDS.ID]: string().required('Campo requerido'),
      [SIGN_UP_FIELDS.LAST_LOCATION]: string().required('Campo requerido'),
      [SIGN_UP_FIELDS.LAST_NAME]: string().required('Campo requerido'),
      [SIGN_UP_FIELDS.NAME]: string().required('Campo requerido')
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
