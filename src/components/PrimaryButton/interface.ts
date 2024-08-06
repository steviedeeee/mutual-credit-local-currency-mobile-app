import {TouchableOpacityProps} from 'react-native';

export type PrimaryButtonProps = {
  title: string;
  isLoading?: boolean;
  onPress?: () => void;
  size?: 'normal' | 'lg';
  variant?: 'primary' | 'secondary';
} & TouchableOpacityProps;
