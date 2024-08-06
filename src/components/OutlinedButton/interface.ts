import {ReactElement} from 'react';
import {StyleProp, TextStyle, TouchableOpacityProps} from 'react-native';

export type OutlinedButtonProps = {
  title: string;
  isLoading?: boolean;
  onPress?: () => void;
  icon?: ReactElement;
  textStyle?: StyleProp<TextStyle>;
} & TouchableOpacityProps;
