import React from 'react';
import {StyleSheet} from 'react-native';
import {useController} from 'react-hook-form';
import {FormInputProps} from './interface';
import NextTextInput from 'react-native-next-input';

const FormInputPin: React.FC<FormInputProps> = ({
  name,
  control,
  style,
  rules,
  ...props
}) => {
  const {field} = useController({
    control,
    defaultValue: '',
    name,
    rules,
  });

  return (
    <NextTextInput
      noOfTextInput={6}
      textInputStyle={styles.input}
      onChangeValue={v => {
        field.onChange(v.join(''));
      }}
      parentViewStyle={styles.pinInputContainer}
    />
  );
};

const styles = StyleSheet.create({
  pinInputContainer: {
    gap: 20,
    justifyContent: 'center',
  },
  input: {
    paddingTop: 5,
    paddingBottom: 5,
    color: '#000',
    fontSize: 24,
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    width: 30,
  },
});

export default FormInputPin;
