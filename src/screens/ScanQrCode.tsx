import React, {useState} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Snackbar from 'react-native-snackbar';
import {RNCamera} from 'react-native-camera';
import IconButton from '../components/IconButton';
import {StyleSheet, Text, View} from 'react-native';
import {SunIcon} from '../components/Icons';
import {useModal} from '../context/ModalContext';
import PrimaryButton from '../components/PrimaryButton';

const ScanQrCode: React.FC<any> = ({navigation}) => {
  const {showModalError, showModalSuccess} = useModal();
  const onRead = async (data: any) => {
    const qrString = data.data;

    try {
      showModalSuccess('Success');

      navigation.pop(2);
    } catch (res: any) {
      Snackbar.show({text: JSON.stringify(res)});

      navigation.pop();
    }
  };

  const [flashMode, setFlashMode] = useState(false);

  return (
    <QRCodeScanner
      onRead={onRead}
      flashMode={
        flashMode
          ? RNCamera.Constants.FlashMode.torch
          : RNCamera.Constants.FlashMode.off
      }
      topContent={
        <Text style={styles.introText}>
          Fit the Receiver’s QR Code in the square below
        </Text>
      }
      bottomContent={
        <View style={styles.bottomContainer}>
          <IconButton
            style={[styles.flashButton, {opacity: flashMode ? 0.6 : 1}]}
            onPress={() => setFlashMode(!flashMode)}>
            <SunIcon fill="#fff" size={24} />
          </IconButton>
          <PrimaryButton
            size="lg"
            title="Cancel"
            onPress={() => navigation.pop()}
          />
        </View>
      }
    />
  );
};

export default ScanQrCode;

const styles = StyleSheet.create({
  introText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: '700',
    maxWidth: 280,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  bottomContainer: {
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    gap: 14,
  },
  flashButton: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
