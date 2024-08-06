import React from 'react';
import {Text as TextRN, TextProps} from 'react-native';
import GlobalStyles from '../styles/GlobalStyle';

const Text: React.FC<
  TextProps & {fontWeight?: 'light' | 'reg' | 'med' | 'semi' | 'bold'}
> = ({children, style, fontWeight = 'reg', ...props}) => {
  let fontFamilyStyle = GlobalStyles.fontMontserratReg;

  switch (fontWeight) {
    case 'bold':
      fontFamilyStyle = GlobalStyles.fontMontserratBold;
      break;
    case 'semi':
      fontFamilyStyle = GlobalStyles.fontMontserratSemi;
      break;
    case 'med':
      fontFamilyStyle = GlobalStyles.fontMontserratMed;
      break;
    case 'light':
      fontFamilyStyle = GlobalStyles.fontMontserratLight;
      break;
  }

  return (
    <TextRN style={[style, fontFamilyStyle]} {...props}>
      {children}
    </TextRN>
  );
};

export default Text;
