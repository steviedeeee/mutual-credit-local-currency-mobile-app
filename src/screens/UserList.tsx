import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  ListRenderItem,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import UserItem from '../components/UserItem';
import {useAppDispatch, useAppSelector} from '../redux/store';
import SkeletonUser from '../components/skeletons/User';
import {IUser} from '../interfaces/api/user';
import {searchUsers} from '../redux/reducers/user';

const UserList: React.FC<any> = ({navigation}) => {
  const dispatch = useAppDispatch();

  const {users, isLoading} = useAppSelector(state => state.user);

  const resetUsers = useCallback(() => {
    dispatch(searchUsers());
  }, [dispatch]);

  useEffect(() => {
    resetUsers();
  }, [resetUsers]);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    resetUsers();
  }, [resetUsers]);

  const renderItem: ListRenderItem<IUser> = ({item, index}) => {
    return (
      <UserItem
        number={index + 1}
        user={item}
        style={{paddingLeft: 20, paddingRight: 20}}
        onPress={() => {
          navigation.navigate('User Detail', {
            user: item,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      {!isLoading ? (
        <View style={{flex: 1}}>
          {users.length >= 1 ? (
            <FlatList
              data={users}
              renderItem={renderItem}
              contentContainerStyle={{paddingBottom: 30}}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
              keyExtractor={item => item.id}
            />
          ) : (
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text>There is no data</Text>
            </View>
          )}
        </View>
      ) : (
        <SkeletonUser />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
});

export default UserList;
