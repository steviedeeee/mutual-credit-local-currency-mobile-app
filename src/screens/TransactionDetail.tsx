import React from 'react';
import WidgetBox from '../components/WidgetBox';
import {StyleSheet, View} from 'react-native';
import {transactionDate} from '../helpers/date';
import {ITransaction} from '../interfaces/api/transaction';
import GlobalStyles from '../styles/GlobalStyle';
import Text from '../components/Text';

const TransactionDetail: React.FC<any> = ({route, navigation}) => {
  const {transaction}: {transaction: ITransaction} = route.params;

  return (
    <View
      style={[styles.container, GlobalStyles.xPadding, GlobalStyles.mainBg]}>
      <WidgetBox style={{flex: 0, paddingBottom: 100}}>
        <View style={styles.infoDetail}>
          <Text style={styles.infoDetailLabel} fontWeight="bold">
            Date
          </Text>
          <Text style={styles.infoDetailValue} fontWeight="med">
            {transactionDate(transaction.createdAt)}
          </Text>
        </View>
        <View style={styles.infoDetail}>
          <Text style={styles.infoDetailLabel} fontWeight="bold">
            Seller
          </Text>
          <Text style={styles.infoDetailValue} fontWeight="med">
            {transaction.customer}
          </Text>
        </View>
        <View style={styles.infoDetail}>
          <Text style={styles.infoDetailLabel} fontWeight="bold">
            Amount debited
          </Text>
          <Text style={styles.infoDetailValue} fontWeight="med">
            {transaction.amount}
          </Text>
        </View>
        <View style={styles.infoDetail}>
          <Text style={styles.infoDetailLabel} fontWeight="bold">
            Your levy
          </Text>
          <Text style={styles.infoDetailValue} fontWeight="med">
            {transaction.levy}
          </Text>
        </View>
        {transaction.description && (
          <View style={styles.infoDetail}>
            <Text style={styles.infoDetailLabel} fontWeight="bold">
              Description
            </Text>
            <Text
              style={[
                styles.infoDetailValue,
                {fontSize: 12, textAlign: 'right', flexWrap: 'wrap', flex: 1},
              ]}>
              {transaction.description}
            </Text>
          </View>
        )}
      </WidgetBox>
    </View>
  );
};

export default TransactionDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoDetail: {
    color: '#333',
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
  },
  infoDetailLabel: {
    fontSize: 15,
    color: '#656A68',
  },
  infoDetailValue: {
    color: '#797E7C',
    fontSize: 15,
    fontWeight: '500',
  },
});
