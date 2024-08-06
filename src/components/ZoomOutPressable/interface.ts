import {ReactElement} from 'react';
import {PressableProps} from 'react-native';

export type ZoomOutPressableProps = {
  animatedStyle?: any;
  children: ReactElement | Element[] | any;
} & PressableProps;
