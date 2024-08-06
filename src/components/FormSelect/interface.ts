import {Control, FieldValues, RegisterOptions} from 'react-hook-form';
import {Item} from 'react-native-picker-select';

export type FormSelectProps = {
  name: string;
  control: Control<FieldValues | any>;
  rules?: RegisterOptions; //{[key: string]: string};
  placeholder?: {} | Item;
  items: Item[];
};
