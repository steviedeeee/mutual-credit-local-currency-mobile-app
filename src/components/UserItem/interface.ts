import {TouchableOpacityProps} from 'react-native';
import {IUser} from '../../interfaces/api/user';

export type UserItemProps = {
  number: number;
  user: IUser;
} & TouchableOpacityProps;
