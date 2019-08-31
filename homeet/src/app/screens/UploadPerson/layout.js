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
import locationIcon from '@assets/ic_localizacion.png';
import userIcon from '@assets/ic_user.png';
import noteIcon from '@assets/ic_note.png';
import cakeIcon from '@assets/ic_cake.png';
import rulerIcon from '@assets/ic_ruler.png';
import picture from '@assets/pic.jpeg';
import { transparent } from '@constants/colors';

import styles, { stepIndicatorStyles } from './styles';
import { STEP_INDICATOR_LABELS, STEP_INDICATOR_STEPS, strings, UPLOAD_PERSON_FIELDS } from './constants';

const KeyboardAwareImage = KeyboardAware(Image);
const KeyboardAwareView = KeyboardAware(View);

class UploadPerson extends Component {
  [UPLOAD_PERSON_FIELDS.LAST_LOCATION] = React.createRef();

  [UPLOAD_PERSON_FIELDS.ID] = React.createRef();

  [UPLOAD_PERSON_FIELDS.AGE] = React.createRef();

  [UPLOAD_PERSON_FIELDS.HEIGHT] = React.createRef();

  handleNameSubmitting = () => {
    this[UPLOAD_PERSON_FIELDS.AGE].current.focus();
  };

  handleAgeSubmitting = () => {
    this[UPLOAD_PERSON_FIELDS.ID].current.focus();
  };

  handleIdSubmitting = () => {
    this[UPLOAD_PERSON_FIELDS.LAST_LOCATION].current.focus();
  };

  handleLocationsSubmitting = () => {
    this[UPLOAD_PERSON_FIELDS.HEIGHT].current.focus();
  };

  componentDidUpdate(prevProps) {
    const { currentStep, setTouched } = this.props;
    if (prevProps.currentStep !== currentStep) setTouched(false);
  }

  render() {
    const { currentStep, handleSubmit, values, setFieldValue, onNext } = this.props;
    const finalStep = currentStep === 1;
    return (
      <BaseForm link onSubmit={handleSubmit} scrolleable>
        <View style={styles.container}>
          <StepIndicator
            customStyles={stepIndicatorStyles}
            currentPosition={currentStep}
            stepCount={STEP_INDICATOR_STEPS}
            labels={STEP_INDICATOR_LABELS}
            currentStepCompleted
          />
          {currentStep === 0 ? (
            <>
              <CustomTextInput
                name={UPLOAD_PERSON_FIELDS.NAME}
                underlineColorAndroid={transparent}
                placeholder={strings.name}
                style={styles.formElement}
                returnKeyType="next"
                autoCapitalize="words"
                underline
                onTextSubmitEditing={this.handleNameSubmitting}
                labelIcon={userIcon}
              />
              <CustomTextInput
                name={UPLOAD_PERSON_FIELDS.AGE}
                underlineColorAndroid={transparent}
                placeholder={strings.age}
                style={styles.formElement}
                autoCapitalize="none"
                keyboardType="phone-pad"
                returnKeyType="next"
                underline
                onTextSubmitEditing={this.handleNameSubmitting}
                textRef={this[UPLOAD_PERSON_FIELDS.AGE]}
                labelIcon={cakeIcon}
              />
              <CustomTextInput
                name={UPLOAD_PERSON_FIELDS.ID}
                underlineColorAndroid={transparent}
                placeholder={strings.id}
                style={styles.formElement}
                autoCapitalize="none"
                keyboardType="phone-pad"
                returnKeyType="next"
                underline
                onTextSubmitEditing={this.handleIdSubmitting}
                textRef={this[UPLOAD_PERSON_FIELDS.ID]}
                labelIcon={noteIcon}
              />
              <CustomTextInput
                name={UPLOAD_PERSON_FIELDS.LAST_LOCATION}
                underlineColorAndroid={transparent}
                placeholder={strings.lastLocation}
                style={styles.formElement}
                autoCapitalize="words"
                returnKeyType="next"
                underline
                onTextSubmitEditing={this.handleLocationsSubmitting}
                textRef={this[UPLOAD_PERSON_FIELDS.LAST_LOCATION]}
                labelIcon={locationIcon}
              />
              <CustomTextInput
                name={UPLOAD_PERSON_FIELDS.HEIGHT}
                underlineColorAndroid={transparent}
                placeholder={strings.height}
                style={styles.formElement}
                autoCapitalize="none"
                returnKeyType="go"
                underline
                onTextSubmitEditing={handleSubmit}
                textRef={this[UPLOAD_PERSON_FIELDS.HEIGHT]}
                labelIcon={rulerIcon}
              />
            </>
          ) : (
            <Image
              source={picture}
              style={{
                marginBottom: 10,
                height: '80%',
                width: '90%',
                resizeMode: 'contain',
                alignSelf: 'center'
              }}
            />
          )}
          <CustomButton
            primaryBtn
            onPress={handleSubmit}
            title={!finalStep ? strings.next : strings.uploadButton}
            textStyle={styles.whiteText}
            style={styles.signUpBtn}
          />
        </View>
      </BaseForm>
    );
  }
}

UploadPerson.propTypes = {
  currentStep: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setTouched: PropTypes.func.isRequired
};

const enhancer = compose(
  withFormik({
    mapPropsToValues: ({ initialValues }) => initialValues,
    validationSchema: ({ validationSchema, currentStep }) => validationSchema[currentStep],
    handleSubmit: (values, { props }) => (props.currentStep === 1 ? props.onUpload(values) : props.onNext())
  }),
  Loadable(props => props.loading)
);

export default enhancer(UploadPerson);
