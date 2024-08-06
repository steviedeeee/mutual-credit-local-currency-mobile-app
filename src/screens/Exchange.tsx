import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  ListRenderItem,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native';
import {EmptyBanner} from '../components/Icons';
import PrimaryButton from '../components/PrimaryButton';
import FormInput from '../components/FormInput';
import Text from '../components/Text';
import {useForm} from 'react-hook-form';
import {useAppDispatch, useAppSelector} from '../redux/store';
import ExchangeItem from '../components/ExchangeItem';
import {IExchange} from '../interfaces/api/exchange';
import {searchExchanges} from '../redux/reducers/exchange';

const Exchange: React.FC<any> = ({navigation}) => {
  const {control} = useForm<{key: string}>();

  const dispatch = useAppDispatch();

  const {exchanges, isLoading} = useAppSelector(state => state.exchange);

  const resetExchanges = useCallback(() => {
    dispatch(searchExchanges());
  }, [dispatch]);

  useEffect(() => {
    resetExchanges();
  }, [resetExchanges]);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    resetExchanges();
  }, [resetExchanges]);

  const renderItem: ListRenderItem<IExchange> = ({item, index}) => {
    return (
      <ExchangeItem
        exchange={item}
        onPress={() => {
          navigation.navigate('Exchange Detail', {
            exhange: item,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FormInput
        name="newPassword"
        control={control}
        secureTextEntry={true}
        placeholder="Search"
        rules={{
          required: true,
          minLength: 8,
        }}
        style={{marginBottom: 20}}
      />

      {exchanges.length >= 1 ? (
        <FlatList
          data={exchanges}
          renderItem={renderItem}
          contentContainerStyle={{paddingTop: 20, paddingBottom: 30, gap: 38}}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          keyExtractor={item => item.id}
        />
      ) : (
        <View style={styles.emptyBannerContainer}>
          <EmptyBanner size={158} />
          <View>
            <Text style={styles.emptyText}>You have no ads.</Text>
            <Text style={styles.emptyText}>Please add one now</Text>
          </View>
        </View>
      )}

      <PrimaryButton
        size="lg"
        title="Add Offer and Want"
        onPress={() => navigation.navigate('Create Exchange')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#FAFAFA',
    flex: 1,
  },
  emptyBannerContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    flex: 1,
    gap: 20,
  },
  emptyText: {
    textAlign: 'center',
  },
});

export default Exchange;
