import React from 'react';
import ButtonMenu from '../components/ButtonMenu';
import {StyleSheet, Text, View} from 'react-native';
import {TransactionBanner} from '../components/Icons';

const Transaction: React.FC<any> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <TransactionBanner size={200} />
      </View>
      <Text style={styles.introText}>
        Please select the type of transaction you want
      </Text>
      <View style={styles.buttonsContainer}>
        <ButtonMenu
          title="Receive"
          onPress={() => {
            navigation.navigate('My QR Code');
          }}
          style={{marginTop: 14}}
        />

        <ButtonMenu
          title="Send"
          onPress={() => {
            navigation.navigate('Scan Qr Code');
          }}
          style={{marginTop: 14}}
        />

        <ButtonMenu
          title="Remote Transaction"
          onPress={() => {
            navigation.navigate('Remote Transaction');
            //navigation.navigate('Success');
          }}
          style={{marginTop: 14}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
  },
  introText: {
    textAlign: 'center',
    maxWidth: 250,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 30,
  },
  container: {
    flex: 1,
    paddingStart: 20,
    paddingEnd: 20,
    paddingTop: 20,
    paddingBottom: 30,
    backgroundColor: '#FAFAFA',
  },
  buttonsContainer: {
    flex: 1,
    gap: 8,
  },
});

export default Transaction;
