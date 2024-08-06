import React from 'react';
import {StyleSheet} from 'react-native';
import {IconButtonProps} from './interface';
import ZoomOutPressable from '../ZoomOutPressable';

const IconButton: React.FC<IconButtonProps> = ({children, onPress, style}) => {
  return (
    <ZoomOutPressable
      onPress={onPress}
      animatedStyle={[styles.container, style]}>
      {children}
    </ZoomOutPressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 25,
    height: 48,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(230, 36, 114)',
  },
});

export default IconButton;
