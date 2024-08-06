import React from 'react';
import {
  Text,
  ActivityIndicator,
  StyleSheet,
  Pressable,
  Animated,
  View,
} from 'react-native';
import {OutlinedButtonProps} from './interface';

const OutlinedButton: React.FC<OutlinedButtonProps> = ({
  title,
  isLoading,
  onPress,
  style,
  textStyle,
  icon,
}) => {
  const animated = new Animated.Value(1);

  const fadeIn = () => {
    Animated.timing(animated, {
      toValue: 0.98,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable onPress={onPress} onPressIn={fadeIn} onPressOut={fadeOut}>
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{scale: animated}],
          },
          style,
        ]}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <View style={styles.buttonContainer}>
            {icon}
            <Text style={[styles.textButton, textStyle]}>{title}</Text>
          </View>
        )}
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderColor: 'rgb(230, 36, 114)',
    borderStyle: 'solid',
    borderWidth: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 25,
    height: 44,
  },
  buttonContainer: {
    gap: 10,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    textAlignVertical: 'center',
    backgroundColor: 'transparent',
    color: 'rgb(230, 36, 114)',
    textAlign: 'center',
    fontSize: 15,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
});

export default OutlinedButton;
