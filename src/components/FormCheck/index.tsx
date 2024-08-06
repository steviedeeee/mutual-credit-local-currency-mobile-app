import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {FormCheckProps} from './interface';
import Text from '../Text';
import {CheckIcon} from '../Icons';

const FormCheck: React.FC<FormCheckProps> = ({options}) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <View style={styles.container}>
      {options.map((option, index) => {
        const isActive = index === selectedIndex;
        return (
          <Pressable key={index} onPress={() => setSelectedIndex(index)}>
            <View
              style={[
                styles.buttonContainer,
                isActive ? styles.buttonContainerActive : {},
              ]}>
              {isActive && (
                <View style={styles.iconContainer}>
                  <CheckIcon size={8} fill="#007A35" />
                </View>
              )}
              <Text
                style={[
                  styles.buttonColor,
                  isActive ? styles.buttonColorActive : {},
                ]}
                fontWeight="bold">
                {option.label}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 20,
  },
  buttonContainer: {
    borderWidth: 1,
    borderColor: '#8F9592',
    height: 48,
    borderRadius: 8,
    minWidth: 102,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  buttonContainerActive: {
    borderColor: '#00CC58',
  },
  buttonColor: {
    color: '#656A68',
  },
  buttonColorActive: {
    color: '#00CC58',
  },
  iconContainer: {
    backgroundColor: '#00CC58',
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    position: 'absolute',
    right: -10,
    top: -10,
  },
});

export default FormCheck;
