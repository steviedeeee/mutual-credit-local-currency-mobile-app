import {PressableProps} from 'react-native';

export type IconButtonProps = {
  children: any;
  onPress?: () => void;
} & PressableProps;
