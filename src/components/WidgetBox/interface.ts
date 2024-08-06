import {ViewProps, ViewStyle} from 'react-native';

export type WidgetBoxProps = {
  children: (Element | Element[])[] | Element;
} & ViewProps;

export type WidgetBoxHeaderProps = {
  title: string;
  description?: string;
  labelButton?: string;
  onClickLabelButton?: () => void;
  style?: ViewStyle;
};
