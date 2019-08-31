import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { object, string, number } from 'yup';
import { connect } from 'react-redux';
import Routes from '@constants/routes';
import AuthActions from '@redux/auth/actions';

import { UPLOAD_PERSON_FIELDS } from './constants';
import UploadPerson from './layout';

class UploadPersonContainer extends Component {
  state = {
    currentStep: 0
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
    const { uploadPerson } = this.props;
    debugger;
    uploadPerson(values);
  };

  render() {
    const { currentStep } = this.state;
    const { loading } = this.props;
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
  uploadPerson: values => dispatch(AuthActions.signUp(values))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadPersonContainer);
