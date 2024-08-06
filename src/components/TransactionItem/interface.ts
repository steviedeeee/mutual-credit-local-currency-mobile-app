import {TouchableOpacityProps} from 'react-native';
import {ITransaction} from '../../interfaces/api/transaction';

export type TransactionItemProps = {
  transaction: ITransaction;
  showMerchant?: boolean;
} & TouchableOpacityProps;
