import React from 'react';
import {Text} from 'react-native';
import {FormLabelProps} from './interface';

const FormError: React.FC<FormLabelProps> = ({children, style, ...props}) => {
  return (
    <Text
      style={[
        {
          marginTop: 4,
          color: 'red',
          fontSize: 12,
        },
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export default FormError;
