import {Pressable, View} from 'react-native';
import React from 'react';
import {UserItemProps} from './interface';
import {StyleSheet} from 'react-native';
import Card from '../Card';
import Text from '../Text';
import {UserProfileAltIcon, UserProfileIcon} from '../Icons';

const UserItem: React.FC<UserItemProps> = ({number, user, style, ...props}) => {
  return (
    <Pressable style={[styles.container, style]} {...props}>
      <Card>
        <View style={styles.userLine}>
          <UserProfileAltIcon size={20} fill="#8F9592" />
          <Text style={styles.number} fontWeight="bold">
            {number}.
          </Text>
          <Text style={[styles.name]} fontWeight="bold">
            {user.name}
          </Text>
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
  userLine: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {color: '#8F9592', fontSize: 15, marginLeft: 18, marginRight: 4},
  name: {color: '#0093C8', fontSize: 15},
});

export default UserItem;
