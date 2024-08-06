import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useController} from 'react-hook-form';
import {FormInputProps} from './interface';
import Text from '../Text';
import {PhotoBanner} from '../Icons';

const FormUploader: React.FC<FormInputProps> = ({
  name,
  control,
  style,
  rules,
  ...props
}) => {
  const {field} = useController({
    control,
    defaultValue: '',
    name,
    rules,
  });

  return (
    <View style={styles.container}>
      <PhotoBanner size={64} />
      <Text>Take photo or upload image (.gif .jpg .png)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'dashed',
    borderColor: '#00CC58',
    backgroundColor: '#F4F4F4',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingTop: 30,
    paddingBottom: 20,
  },
});

export default FormUploader;
