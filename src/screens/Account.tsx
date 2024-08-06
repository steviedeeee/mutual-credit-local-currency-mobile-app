import React from 'react';
import ButtonMenu from '../components/ButtonMenu';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useConfirmation} from '../context/ConfirmationContext';
import {useAuth} from '../context/AuthContext';
import WidgetBox from '../components/WidgetBox';
import AccountProfile from '../components/AccountProfile';
import PrimaryButton from '../components/PrimaryButton';
import BackButton from '../components/BackButton';
import GlobalStyles from '../styles/GlobalStyle';
import Divider from '../components/Divider';

const Account: React.FC<any> = ({navigation}) => {
  const {setMe} = useAuth();
  const {confirmation, setIsLoading, close} = useConfirmation();

  return (
    <ScrollView
      style={[styles.container, GlobalStyles.xPadding, GlobalStyles.mainBg]}>
      <BackButton
        style={{position: 'absolute'}}
        onPress={() => navigation.pop()}
      />
      <AccountProfile />
      <WidgetBox>
        <View style={styles.buttonsContainer}>
          <ButtonMenu
            title="Account Settings"
            onPress={() => {
              navigation.navigate('Account Settings');
            }}
          />
          <Divider />
          <ButtonMenu
            title="My Trades"
            onPress={() => {
              navigation.navigate('Transaction History');
            }}
          />
          <Divider />
          <ButtonMenu
            title="My QR Code"
            onPress={() => {
              navigation.navigate('My QR Code');
            }}
          />
          <Divider />
          <ButtonMenu title="App Settings" onPress={() => {}} />
        </View>
      </WidgetBox>

      <PrimaryButton
        style={{marginTop: 30}}
        size="lg"
        title="Log Out"
        variant="secondary"
        onPress={() => {
          confirmation({
            title: 'Confirmation',
            description: 'Are you sure want to logout?',
            callback: async () => {
              setIsLoading(true);
              // promise to signout
              setMe(null);
              setIsLoading(false);
              close();
            },
          });
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  buttonsContainer: {
    flex: 1,
    gap: 4,
  },
});

export default Account;
