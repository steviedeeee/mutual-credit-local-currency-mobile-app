import React from 'react';
import {FormLabelProps} from './interface';
import Text from '../Text';

const FormLabel: React.FC<FormLabelProps> = ({children, style, ...props}) => {
  return (
    <Text
      style={[
        {
          marginBottom: 4,
          fontWeight: '600',
          color: '#333',
          fontSize: 14,
        },
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export default FormLabel;
