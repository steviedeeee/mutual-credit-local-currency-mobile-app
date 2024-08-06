import {ViewProps} from 'react-native';

export type FormSearchProps = {
  placeholder?: string;
  isLoading?: boolean;
  onChangeText?: (text: string) => void;
  withSearchButton?: boolean;
  onSubmit?: (text: string) => void;
  isFocus?: boolean;
  onClear?: () => void;
  isSmall?: boolean;
} & ViewProps;

export interface FormSearchFakeProps {
  placeholder?: string;
  onPress: () => void;
}
