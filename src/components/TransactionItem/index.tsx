import {View, Pressable} from 'react-native';
import React from 'react';
import {TransactionItemProps} from './interface';
import {StyleSheet} from 'react-native';
import {transactionDate} from '../../helpers/date';
import Card from '../Card';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CheckAltIcon,
  TokenStarIcon,
} from '../Icons';
import Text from '../Text';

const TransactionItem: React.FC<TransactionItemProps> = ({
  transaction,
  style,
  showMerchant,
  ...props
}) => {
  const isSubtraction = transaction?.transactionType === 'SEND';

  const title =
    transaction?.transactionType === 'SEND' ? 'Send Token' : 'Receive Token';

  const icon =
    transaction?.transactionType === 'SEND' ? (
      <View style={[styles.iconContainer, {backgroundColor: '#F2698A'}]}>
        <ArrowUpIcon size={8} fill="#DC145C" />
      </View>
    ) : (
      <View style={[styles.iconContainer, {backgroundColor: '#00ED7D'}]}>
        <ArrowDownIcon size={8} fill="#00CC61" />
      </View>
    );

  return (
    <Pressable style={[styles.container, style]} {...props}>
      <Card>
        <View style={styles.contentContainer}>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <View
                style={{
                  width: 16,
                  height: 13,
                  backgroundColor: '#00ED7D',
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <CheckAltIcon size={9} fill="#00CC61" />
              </View>
              <Text style={{fontSize: 12}} fontWeight="light">
                {transactionDate(transaction.createdAt)}
              </Text>
            </View>
            <Text style={{color: '#313280', fontSize: 16}} fontWeight="med">
              {title}
            </Text>
          </View>
          <View></View>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <View>{icon}</View>
              <Text>{transaction.amount}</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <TokenStarIcon size={16} />
              <Text>{transaction.currentBalance}</Text>
            </View>
          </View>
        </View>
      </Card>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  contentContainer: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'space-between',
  },
  date: {
    color: '#5C5C5C',
    fontSize: 12,
    textAlign: 'right',
  },
  title: {
    marginBottom: 1,
    fontWeight: '600',
    color: '#181818',
    fontSize: 14,
  },
  iconContainer: {
    width: 16,
    height: 13,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TransactionItem;
