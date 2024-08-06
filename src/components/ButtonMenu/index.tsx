import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {ButtonMenuProps} from './interface';
import {ArrowRightIcon} from '../Icons';
import Text from '../Text';

const ButtonMenu: React.FC<ButtonMenuProps> = ({title, onPress, style}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.title} fontWeight="bold">
        {title}
      </Text>
      <ArrowRightIcon fill="#8F9592" size={17} />
    </TouchableOpacity>
  );
};

export default ButtonMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 7,
    height: 54,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    color: '#656A68',
    fontSize: 17,
  },
});
