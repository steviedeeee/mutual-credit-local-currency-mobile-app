import {Control, FieldValues, RegisterOptions} from 'react-hook-form';
import {TextInputProps} from 'react-native';

export type FormTextEditorProps = {
  name: string;
  control: Control<FieldValues | any>;
  placeholder?: string;
  rules?: RegisterOptions; //{[key: string]: string};
} & TextInputProps;
