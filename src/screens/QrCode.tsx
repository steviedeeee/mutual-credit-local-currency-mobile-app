import React, {useEffect, useState} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import QRCode from 'react-native-qrcode-svg';
import AccountProfile from '../components/AccountProfile';

const QrCode: React.FC<any> = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const qRString = 'testQr';

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);

  return (
    <View style={styles.container}>
      <AccountProfile hideProfilePicture={true} />

      <View style={styles.qrBox}>
        <View style={styles.qrContainer}>
          {loading && (
            <View
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                justifyContent: 'center',
              }}>
              <ActivityIndicator />
            </View>
          )}
          {qRString && <QRCode size={190} value={qRString} />}
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <PrimaryButton title="Save to Gallery" size="lg" onPress={() => {}} />

        <PrimaryButton
          title="Scan"
          size="lg"
          onPress={() => navigation.navigate('Scan QR Code')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 30,
  },
  title: {
    fontSize: 14,
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
    maxWidth: 180,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  qrBox: {
    flex: 1,
    borderColor: '#D4D4D4',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginBottom: 40,
    marginTop: 40,
  },
  qrContainer: {
    backgroundColor: '#dedede',
    position: 'relative',
    width: 190,
    height: 190,
  },
  buttonsContainer: {
    gap: 14,
  },
});

export default QrCode;
