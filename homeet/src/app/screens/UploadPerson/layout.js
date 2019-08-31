import React, { Component } from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import { compose } from 'recompose';
import StepIndicator from '@components/CustomStepper';
import KeyboardAware from '@components/KeyboardAware';
import { FormField as CustomTextInput } from '@components/CustomTextInput';
import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import Loadable from '@components/Loadable';
import BaseForm from '@components/BaseForm';

import styles, { stepIndicatorStyles } from './styles';
import { STEP_INDICATOR_LABELS, STEP_INDICATOR_STEPS, strings, UPLOAD_PERSON_FIELDS } from './constants';
import { transparent } from '@constants/colors';

const KeyboardAwareImage = KeyboardAware(Image);
const KeyboardAwareView = KeyboardAware(View);

class UploadPerson extends Component {
  componentDidUpdate(prevProps) {
    const { currentStep, setTouched } = this.props;
    if (prevProps.currentStep !== currentStep) setTouched(false);
  }

  render() {
    const { currentStep, onGoToLogin, handleSubmit, values, setFieldValue, onBack } = this.props;
    const finalStep = currentStep === 3;
    return (
      <BaseForm link onSubmit={handleSubmit}>
        <View style={styles.container}>
          <StepIndicator
            customStyles={stepIndicatorStyles}
            currentPosition={currentStep}
            stepCount={STEP_INDICATOR_STEPS}
            labels={STEP_INDICATOR_LABELS}
            currentStepCompleted
          />
          <CustomTextInput
            name={UPLOAD_PERSON_FIELDS.NAME}
            underlineColorAndroid={transparent}
            placeholder={strings.name}
            style={styles.formElement}
            autoCapitalize="none"
            returnKeyType="next"
            underline
          />

          <CustomButton
            primaryBtn
            onPress={handleSubmit}
            title={!finalStep ? strings.next : strings.uploadButton}
            textStyle={styles.whiteText}
            style={[styles.signUpBtn, currentStep === 0 && { width: '100%' }]}
          />
        </View>
      </BaseForm>
    );
  }
}

UploadPerson.propTypes = {
  currentStep: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onGoToLogin: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setTouched: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired
};

const enhancer = compose(
  withFormik({
    mapPropsToValues: ({ initialValues }) => initialValues,
    validationSchema: ({ validationSchema, currentStep }) => validationSchema[currentStep],
    handleSubmit: (values, { props }) => (props.currentStep === 3 ? props.onSignUp(values) : props.onNext())
  }),
  Loadable(props => props.loading)
);

export default enhancer(UploadPerson);
