import React from 'react';
import {StyleSheet, View} from 'react-native';
import {WidgetBoxProps} from './interface';

const WidgetBox: React.FC<WidgetBoxProps> = ({children, style, ...props}) => {
  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    borderColor: '#EFEFEF',
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 18,
  },
});

export default WidgetBox;
