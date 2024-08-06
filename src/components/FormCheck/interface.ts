import {TextProps} from 'react-native';

interface IOption {
  value: string;
  label: string;
}

export type FormCheckProps = {
  options: IOption[];
} & TextProps;
