import React from 'react';
import {Pressable, Animated} from 'react-native';
import {ZoomOutPressableProps} from './interface';

const ZoomOutPressable: React.FC<ZoomOutPressableProps> = ({
  animatedStyle,
  children,
  ...pressableProps
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
    <Pressable onPressIn={fadeIn} onPressOut={fadeOut} {...pressableProps}>
      <Animated.View style={[{transform: [{scale: animated}]}, animatedStyle]}>
        {children}
      </Animated.View>
    </Pressable>
  );
};

export default ZoomOutPressable;
