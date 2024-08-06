import React from 'react';
import {StyleSheet, TouchableHighlight} from 'react-native';
import {QrCodeIcon} from '../Icons';
import {QrCodeButtonProps} from './interface';

const QrCodeButton: React.FC<QrCodeButtonProps> = ({onPress, style}) => {
  return (
    <TouchableHighlight
      style={[styles.container, style]}
      underlayColor="rgb(198, 16, 89)"
      onPress={onPress}>
      <QrCodeIcon size={24} fill="#fff" />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(230, 36, 114)',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default QrCodeButton;
