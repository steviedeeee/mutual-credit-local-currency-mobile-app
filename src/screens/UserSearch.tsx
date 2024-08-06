import React, {useCallback, useEffect} from 'react';
import {FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native';
//import {SearchUserBanner} from '../components/Icons';
import PrimaryButton from '../components/PrimaryButton';
import FormInput from '../components/FormInput';
import {useForm} from 'react-hook-form';
import {useAppDispatch, useAppSelector} from '../redux/store';
import {searchUsers} from '../redux/reducers/user';
import UserItem from '../components/UserItem';
import {IUser} from '../interfaces/api/user';

const UserSearch: React.FC<any> = ({navigation}) => {
  const {control} = useForm<{key: string}>();

  const dispatch = useAppDispatch();

  const {users, isLoading} = useAppSelector(state => state.user);

  const resetUsers = useCallback(() => {
    dispatch(searchUsers());
  }, [dispatch]);

  const renderItem: ListRenderItem<IUser> = ({item, index}) => {
    return (
      <UserItem
        number={index + 1}
        user={item}
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
      <View style={styles.innerContainer}>
        {/*<View style={styles.bannerContainer}>
        <SearchUserBanner size={185} />
      </View>*/}
        <Text style={styles.introText}>
          Enter the Name /or Account Number user do you search
        </Text>
        <FormInput
          name="key"
          control={control}
          style={{marginBottom: 30}}
          placeholder="Enter user's name"
        />
        <PrimaryButton
          title="Search"
          //onPress={() => navigation.navigate('User List')}
          onPress={() => resetUsers()}
        />
      </View>
      {users.length >= 1 && (
        <FlatList
          data={users}
          renderItem={renderItem}
          contentContainerStyle={[styles.innerContainer, {paddingBottom: 30}]}
          style={{marginTop: 10}}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: '#FAFAFA',
  },
  innerContainer: {
    paddingRight: 30,
    paddingLeft: 30,
  },
  bannerContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
  },
  introText: {
    //textAlign: 'center',
    //maxWidth: 240,
    //marginLeft: 'auto',
    //marginRight: 'auto',
    marginBottom: 10,
  },
});

export default UserSearch;
