import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  ListRenderItem,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ITransaction} from '../interfaces/api/transaction';
import TransactionItem from '../components/TransactionItem';
import {searchTransactions} from '../redux/reducers/transaction';
import {useAppDispatch, useAppSelector} from '../redux/store';
import SkeletonTransaction from '../components/skeletons/Transaction';
import GlobalStyles from '../styles/GlobalStyle';
import PrimaryButton from '../components/PrimaryButton';

const TransactionList: React.FC<any> = ({navigation}) => {
  const dispatch = useAppDispatch();

  const {transactions, isLoading} = useAppSelector(state => state.transaction);

  const resetTransactions = useCallback(() => {
    dispatch(searchTransactions());
  }, [dispatch]);

  useEffect(() => {
    resetTransactions();
  }, [resetTransactions]);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    resetTransactions();
  }, [resetTransactions]);

  const renderItem: ListRenderItem<ITransaction> = ({item, index}) => {
    return (
      <TransactionItem
        key={index}
        transaction={item}
        style={{paddingLeft: 20, paddingRight: 20}}
        showMerchant
        onPress={() => {
          navigation.navigate('Transaction Detail', {
            transaction: item,
          });
        }}
      />
    );
  };

  return (
    <View style={[styles.container, GlobalStyles.mainBg]}>
      {!isLoading ? (
        <View style={{flex: 1}}>
          {transactions.length >= 1 ? (
            <>
              <FlatList
                data={transactions}
                renderItem={renderItem}
                contentContainerStyle={{paddingTop: 20, paddingBottom: 30}}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }
                keyExtractor={item => item.id}
              />
              <View style={[GlobalStyles.xPadding, GlobalStyles.yPadding]}>
                <PrimaryButton size="lg" title="Next" />
              </View>
            </>
          ) : (
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text>There is no data</Text>
            </View>
          )}
        </View>
      ) : (
        <SkeletonTransaction />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
});

export default TransactionList;
