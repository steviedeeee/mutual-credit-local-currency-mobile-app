import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {useController} from 'react-hook-form';
import {FormInputProps} from './interface';
import GlobalStyles from '../../styles/GlobalStyle';
import FormLabel from '../FormLabel';

const FormInput: React.FC<FormInputProps> = ({
  name,
  control,
  style,
  rules,
  placeholder,
  ...props
}) => {
  const {field} = useController({
    control,
    defaultValue: '',
    name,
    rules,
  });
  return (
    <View>
      {placeholder && <FormLabel>{placeholder}</FormLabel>}
      <TextInput
        style={[styles.input, GlobalStyles.fontMontserratReg, style]}
        placeholderTextColor="#8F9592"
        placeholder={placeholder}
        {...props}
        value={field.value}
        onChangeText={field.onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 15,
    paddingLeft: 16,
    paddingRight: 16,
    height: 48,
    backgroundColor: '#fff',
    borderRadius: 12,
    color: '#8F9592',
  },
});

export default FormInput;
