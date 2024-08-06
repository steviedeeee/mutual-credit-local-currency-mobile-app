import React from 'react';
import {View} from 'react-native';
import {FormGroupProps} from './interface';

const FormGroup: React.FC<FormGroupProps> = ({children, style, ...props}) => {
  return (
    <View
      style={[
        {
          marginBottom: 30,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default FormGroup;
