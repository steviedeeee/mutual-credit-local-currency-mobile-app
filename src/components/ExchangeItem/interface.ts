import {TouchableOpacityProps} from 'react-native';
import {IExchange} from '../../interfaces/api/exchange';

export type ExchangeItemProps = {
  exchange: IExchange;
} & TouchableOpacityProps;
