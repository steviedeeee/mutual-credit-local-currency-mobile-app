import React from 'react';
import {FormSelectProps} from './interface';
import RNPickerSelect from 'react-native-picker-select';
import {useController} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import FormLabel from '../FormLabel';

const FormSelect: React.FC<FormSelectProps> = ({
  name,
  control,
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
      {placeholder && <FormLabel>Display For</FormLabel>}
      <RNPickerSelect
        value={field.value}
        style={{
          viewContainer: styles.viewContainer,
        }}
        onValueChange={field.onChange}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
  },
});

export default FormSelect;
