import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useAuth} from '../../context/AuthContext';
import {AccountProfileProps} from './interface';
import Text from '../Text';

const AccountProfile: React.FC<AccountProfileProps> = ({
  hideProfilePicture,
}) => {
  const {me} = useAuth();

  return (
    <View style={[styles.container]}>
      {me && !hideProfilePicture && (
        <View style={styles.imageContainer}>
          <Image src={me.profilePicture} style={styles.image} />
        </View>
      )}
      <Text style={styles.name} fontWeight="bold">
        {me?.name}
      </Text>
      <View style={styles.accountInfo}>
        <Text style={styles.accountInfoText} fontWeight="light">
          Account No
        </Text>
        <Text style={styles.accountInfoText} fontWeight="light">
          :
        </Text>
        <Text style={[styles.accountInfoText]} fontWeight="semi">
          {me?.accountNumber}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
    width: 78,
    height: 78,
    borderRadius: 12,
    backgroundColor: '#fff',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 12,
    backgroundColor: 'red',
  },
  name: {
    fontSize: 24,
    textAlign: 'center',
    maxWidth: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#000',
    lineHeight: 28,
    marginBottom: 5,
  },
  accountInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
  },
  accountInfoText: {
    color: '#000',
    fontSize: 11,
  },
});

export default AccountProfile;
