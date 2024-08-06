import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

const Card: React.FC<ViewProps> = ({children, style, ...props}) => {
  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 18,
    elevation: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default Card;
