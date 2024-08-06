import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

const Divider: React.FC<ViewProps> = ({style, ...props}) => {
  return <View style={[styles.container, style]} {...props} />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFEFEF',
    height: 1,
  },
});

export default Divider;
