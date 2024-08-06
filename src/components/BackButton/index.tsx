import React from 'react';
import {Pressable, PressableProps, StyleSheet} from 'react-native';
import {ArrowLeftIcon} from '../Icons';

const BackButton: React.FC<PressableProps> = ({onPress, style}) => {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <ArrowLeftIcon size={22} fill="#333" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {},
  textBack: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default BackButton;
