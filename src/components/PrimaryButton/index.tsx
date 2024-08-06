import React from 'react';
import {ActivityIndicator, StyleSheet, Pressable, Animated} from 'react-native';
import {PrimaryButtonProps} from './interface';
import Text from '../Text';

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  isLoading,
  size = 'md',
  variant = 'primary',
  onPress,
  style,
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
    <Pressable
      disabled={isLoading}
      onPress={onPress}
      onPressIn={fadeIn}
      onPressOut={fadeOut}>
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{scale: animated}],
            backgroundColor: variant === 'secondary' ? '#8F9592' : '#00ABE8',
            height: size === 'lg' ? 64 : 45,
            borderRadius: size === 'lg' ? 12 : 11,
          },
          style,
        ]}>
        {isLoading && (
          <ActivityIndicator size="large" color="rgb(236, 169, 196)" />
        )}
        {!isLoading && (
          <Text
            style={[styles.textButton, {fontSize: size === 'lg' ? 16 : 14}]}
            fontWeight="semi">
            {title}
          </Text>
        )}
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center',
  },
  textButton: {
    textAlignVertical: 'center',
    textTransform: 'uppercase',
    color: '#fff',
    textAlign: 'center',
  },
});

export default PrimaryButton;
