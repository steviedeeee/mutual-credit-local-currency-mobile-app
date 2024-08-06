import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AngleRightIcon} from '../Icons';

const ArrowMenuIcon = () => {
  return (
    <View style={styles.container}>
      <AngleRightIcon size={14} fill="rgb(230, 36, 114)" />
    </View>
  );
};

export default ArrowMenuIcon;

const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    borderRadius: 12,
    backgroundColor: 'rgb(233, 161, 190)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
