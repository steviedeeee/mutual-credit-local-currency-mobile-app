import React from 'react';
import {Text, TextProps} from 'react-native';
import GlobalStyles from '../styles/GlobalStyle';

const Badge: React.FC<TextProps & {variant?: 'success' | 'info'}> = ({
  children,
  style,
  variant = 'success',
  ...props
}) => {
  let background = '#BCF6D6';
  let color = '#009240';

  switch (variant) {
    case 'info':
      background = '#DAEFFF';
      color = '#0093C8';
      break;
  }

  return (
    <Text
      style={[
        {backgroundColor: background, color},
        {
          fontSize: 15,
          paddingLeft: 16,
          paddingRight: 16,
          borderRadius: 22,
          height: 30,
          lineHeight: 30,
        },

        GlobalStyles.fontMontserratSemi,
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export default Badge;
